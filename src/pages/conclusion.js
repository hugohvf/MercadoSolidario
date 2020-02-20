import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from "../styles";
import { View, Text, Image, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import api from '../services/api';

const Conclusion = ({dispatch, order}) => {


    useEffect(() => {
        
        getDate().then(res => sendOrder({...order, data: res[1], dataEntrega: res[0]}))
    }, []);

    async function sendOrder(data) {

        let response = await api.post('/order', data)    

      }

    

    async function getDate() {
        
        try {
            let res = await api.get('/date')
            await dispatch({type: "SET_DATE", data: res.data[1], dataEntrega: res.data[0]})
             if(res.status == 200){
                 
                 console.log(res.status)
             }    
                
             return res.data
         }
         catch (err) {
             console.error(err);
         }
    }
        
    

    return (
        <View style={styles.container2}>
            <View style={{...styles.endTextContainer, marginTop: 50}}>
                <Text style={styles.endText}>Obrigado
                </Text>
                <Text style={styles.endText}>pela oportunidade 
                    <Text style={styles.endTextPoint}>.</Text>
                </Text>
            </View>
            <View style={{...styles.endTextContainer, marginBottom: 150}}>
                <Text style={styles.endText}>Suas compras
                </Text>
                <Text style={styles.endText}>chegarão no dia 
                </Text>
                {order.dataEntrega===""?(<ActivityIndicator></ActivityIndicator>):(<Text style={styles.endTextDate}> {order.dataEntrega}
                                                                                        <Text style={styles.endTextPoint}>.</Text>
                                                                                    </Text>)}
                
            </View>
            <Image source={require('../assets//images/logo.png')} style={styles.imageEnd}></Image>
        </View>
    )
}

export default connect(state => ({order: state }))(Conclusion);