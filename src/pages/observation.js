import React from 'react';
import axios from 'axios';
import styles from "../styles";
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux';

const Observation = ({dispatch, navigation}) => {

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.observationText}>Alguma observação?</Text>
                <View style={styles.observationInputContainer}>
                    <TextInput
                    style={styles.observationInput}
                    multiline={true}
                    numberOfLines={7}
                    ></TextInput>
                </View>
            </View>
            <View>
                <View style={styles.observationContainer}>
                    <Text 
                    style={styles.observationText}
                    >Diz aí, em qual mercado você costuma comprar?</Text>
                </View>
                <View style={styles.observationInputContainer}>
                    <TextInput
                    style={styles.observationInput}
                    multiline={true}
                    numberOfLines={7}
                    ></TextInput>
                </View>
            </View>    
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Conclusion')} >
                <Text style={styles.buttonText} >Feito !</Text>
            </TouchableOpacity>
        </View>
    )
}

export default connect()(Observation);