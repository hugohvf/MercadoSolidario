import React, { useState } from 'react';
import axios from 'axios';
import styles from "../styles";
import { View, Text, TouchableOpacity, TextInput, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';

const Observation = ({dispatch, navigation, obs}) => {
    const [text, setText] = useState(obs.text)
    const [market, setMarket] = useState(obs.market)
    let textInput = React.createRef();

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <KeyboardAvoidingView style={styles.container} behavior="height" enabled={true}> 
            <View>
                <Text style={styles.observationText}>Alguma observação?</Text>
                <View style={styles.observationInputContainer}>
                    <TextInput
                    style={styles.observationInput}
                    value={text}
                    onChangeText={(t) => setText(t)}
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
                    style={styles.observationInput2}
                    ref={r => textInput = r}
                    value={market}
                    onChangeText={(t) => setMarket(t)}
                    ></TextInput>
                </View>
            </View>    
            <TouchableOpacity style={styles.button} onPress={() => {dispatch({
                                                                        type: "UPDATE_OBS",
                                                                        text,
                                                                        market
                                                                    })
                navigation.replace('Conclusion');}} >
                <Text style={styles.buttonText} >Feito !</Text>
            </TouchableOpacity>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    )
}

export default connect(state => ({obs: state.obs}))(Observation);