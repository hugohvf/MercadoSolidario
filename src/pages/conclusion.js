import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from "../styles";
import { View, Text, Image, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import api from '../services/api';

const Conclusion = ({dispatch, order}) => {


    useEffect(() => {
        getDate();
        sendOrder();
    }, []);

    async function sendOrder(data) {

        let response = await api.post('/order', order)    

      }

    async function getDate() {

        let response = await api.get('/date')

        dispatch({type: "SET_DATE", data: response.data[1], dataEntrega: response.data[0]})
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