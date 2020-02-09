import React from 'react';
import axios from 'axios';
import styles from "../styles";
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';

const Conclusion = ({dispatch, navigation}) => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();


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
                <Text style={styles.endTextDate}>{date>9?date: `0${date}`}/{month>9?month: `0${month}`}/{year.toString().substr(2)}
                    <Text style={styles.endTextPoint}>.</Text>
                </Text>
            </View>
            <Image source={require('../assets//images/logo.png')} style={styles.imageEnd}></Image>
        </View>
    )
}

export default connect()(Conclusion);