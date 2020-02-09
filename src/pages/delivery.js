import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from "../styles";
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import MapView, { Marker} from 'react-native-maps';
import { connect } from 'react-redux';
import { TextInputMask } from 'react-native-masked-text'

const Delivery = ({dispatch, navigation}) => {
    const [currentRegion, setCurrentRegion] = useState(null);
    const [address, setAddress] = useState({});
    const [cep, setCep] = useState("");
    const [num, setNum] = useState("");
    const [comp, setComp] = useState("");
    const [end, setEnd] = useState("");
    const [bairro, setBairro] = useState("");
    const [tel, setTel] = useState("");
    const [UF, setUF] = useState("");
    const [cidade, setCidade] = useState("");

    const onChange = e => {
        if (e.length === 9) {
          getData(e);
        }
        setCep(e)
      };
    
    const getData = async cep => {
    try {
        const result = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const jsonResult = await result.json();
        console.log(jsonResult);
        setAddress(jsonResult);
        setBairro(jsonResult.bairro)
        setEnd(jsonResult.logradouro)
        setUF(jsonResult.uf)
        setCidade(jsonResult.localidade)
        console.log(address);
    } catch (error) {
        console.log({ error: error });
    }
    };

    return (
        <View style={styles.backgroundContainer}>
            <View style={styles.adressTopContainer}>
                <View style={styles.adress1}>
                    <View style={styles.adress2}>
                        <Text style={styles.adressText}>CEP: </Text>
                        <View style={{...styles.adressInputContainer, width: '80%'}}>
                            <TextInputMask 
                                style={styles.adressInputTop}
                                type={'zip-code'}
                                value={cep}
                                onChangeText={e => onChange(e)}
                            />
                        </View>
                    </View>
                    <View style={styles.adress3}>
                        <Text style={styles.adressText}>Nº: </Text>
                        <View style={{...styles.adressInputContainer, width: '40%'}}>
                            <TextInput 
                            style={styles.adressInputTop}
                            value={num}
                            onChangeText={e => setNum(e)}
                            ></TextInput>
                        </View>
                    </View>
                </View>
                <View style={{...styles.adress1, marginBottom: 10}}>
                    <Text style={styles.adressText}>Complemento: </Text>
                    <View style={{...styles.adressInputContainer, width: '50%'}}>
                        <TextInput 
                        style={styles.adressInput}
                        value={comp}
                        onChangeText={e => setComp(e)}
                        ></TextInput>
                    </View>
                </View>
            </View>

            <View style={styles.adressTopContainer}>
                <View style={{...styles.adress1}}>
                    <Text style={styles.adressText}>Endereço: </Text>
                    <View style={{...styles.adressInputContainer, width: '67%'}}>
                        <TextInput 
                        style={styles.adressInput}
                        value={end}
                        onChangeText={e => setEnd(e)}
                        ></TextInput>
                    </View>
                </View>
                <View style={{...styles.adress1}}>
                    <Text style={styles.adressText}>Bairro: </Text>
                    <View style={{...styles.adressInputContainer, width: '77%'}}>
                        <TextInput 
                        style={styles.adressInput}
                        value={bairro}
                        onChangeText={e => setBairro(e)}
                        ></TextInput>
                    </View>
                </View>
                <View style={{...styles.adress1}}>
                    <Text style={styles.adressText}>Telefone: </Text>
                    <View style={{...styles.adressInputContainer, width: '67%'}}>
                        <TextInputMask
                            style={styles.adressInput}
                            type={'cel-phone'}
                            options={{
                                maskType: 'BRL',
                                withDDD: true,
                                dddMask: '(99) '
                            }}
                            value={tel}
                            onChangeText={text => setTel(text)}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.botContainer}>
                <MapView 
                    style={styles.map

                }>

                </MapView>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Observation')} >
                    <Text style={styles.buttonText} >Feito !</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default connect()(Delivery);