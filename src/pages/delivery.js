import React, { useState } from 'react';
import axios from 'axios';
import styles from "../styles";
import { View, Text, TouchableOpacity, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { connect } from 'react-redux';
import { TextInputMask } from 'react-native-masked-text'

var Env = require('../environment/environment.js')

const Delivery = ({dispatch, navigation, end}) => {
    const [currentRegion, setCurrentRegion] = useState({
                                                        latitude: -23.4118685,
                                                        longitude: -51.9398904,
                                                        latitudeDelta: 0.14,
                                                        longitudeDelta: 0.14,
                                                    });
    const [markerPosition, setMarkerPosition] = useState({  latitude: end.loc.latitude,
                                                            longitude: end.loc.longitude,
                                                        })                                                
    const [cep, setCep] = useState(end.cep);
    const [num, setNum] = useState(end.num);
    const [comp, setComp] = useState(end.comp);
    const [logradouro, setLogradouro] = useState(end.logradouro);
    const [bairro, setBairro] = useState(end.bairro);
    const [tel, setTel] = useState(end.tel);
    const [UF, setUF] = useState(end.UF);
    const [cidade, setCidade] = useState(end.cidade);
    const [nome, setNome] = useState(end.nome);
    let textInputNum = React.createRef();
    let textInputComp = React.createRef();
    let textInputTel = React.createRef();
    let textInputNome = React.createRef();
    let textInputCep = React.createRef();

                                                        
    function updateAdress() {
        dispatch({type: "SET_ADRESS",
                nome,
                cep,
                num,
                comp,
                logradouro,
                bairro,
                tel,
                UF,
                cidade,
                markerPosition,
            })
    }
    
    const getData = async cep => {
    try {
        const result = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const jsonResult = await result.json();
        setBairro(jsonResult.bairro)
        setLogradouro(jsonResult.logradouro)
        setUF(jsonResult.uf)
        setCidade(jsonResult.localidade)
    } catch (error) {
        console.log({ error: error });
    }
    };

    const setLocationcCEP = async ( ) => {
        const result = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${e}&key=AIzaSyAi9booFyLB2mFsIHKMcYNonudrSx4Fp-4&callback=initMap`); 
        const jsonResult = await result.json();
        setCurrentRegion({  latitude: jsonResult.results[0].geometry.location.lat,
                            longitude: jsonResult.results[0].geometry.location.lng,
                            latitudeDelta: 0.03,
                            longitudeDelta: 0.03,
                        })
        setMarkerPosition({
            latitude: jsonResult.results[0].geometry.location.lat,
            longitude: jsonResult.results[0].geometry.location.lng,
        })
    }

    const setLocationcNum = async () => {
        const result = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${num}+${logradouro}&key=AIzaSyAi9booFyLB2mFsIHKMcYNonudrSx4Fp-4&callback=initMap`);
        const jsonResult = await result.json();

        setCurrentRegion({  latitude: jsonResult.results[0].geometry.location.lat,
                            longitude: jsonResult.results[0].geometry.location.lng,
                            latitudeDelta: 0.01,
                            longitudeDelta: 0.01,
        })

        setMarkerPosition({
            latitude: jsonResult.results[0].geometry.location.lat,
            longitude: jsonResult.results[0].geometry.location.lng,
        })
    }

    return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.backgroundContainer}>
            <View style={styles.adressTopContainer}>
            <View style={{...styles.adress1}}>
                    <Text style={styles.adressText}>Nome: </Text>
                    <View style={{...styles.adressInputContainer, width: '80%'}}>
                        <TextInput 
                        style={styles.adressInput}
                        value={nome}
                        autoFocus={true}
                        onChangeText={e => setNome(e)}
                        ref={r => textInputNome = r}
                        onSubmitEditing={() => textInputTel.focus()}
                        ></TextInput>
                    </View>
                </View>
                <View style={{...styles.adress1}}>
                    <Text style={styles.adressText}>Telefone: </Text>
                    <View style={{...styles.adressInputContainer, width: '67%'}}>
                        <TextInputMask
                            refInput={(ref) => textInputTel = ref}
                            style={styles.adressInput}
                            type={'cel-phone'}
                            options={{
                                maskType: 'BRL',
                                withDDD: true,
                                dddMask: '(99) '
                            }}
                            value={tel}
                            placeholder={'(44) 99999-5555'}
                            autoCompleteType={'tel'}
                            onChangeText={text => setTel(text) }
                            keyboardType={"decimal-pad"}
                            onSubmitEditing={() => textInputCep.focus()}
                        />
                    </View>
                </View>
                <View style={styles.adress1}>
                    <View style={styles.adress2}>
                        <Text style={styles.adressText}>CEP: </Text>
                        <View style={{...styles.adressInputContainer, width: '80%'}}>
                            <TextInputMask 
                                refInput={(ref) => textInputCep = ref}
                                style={styles.adressInputTop}
                                type={'zip-code'}
                                placeholder={"00000-000"}
                                value={cep}
                                autoCompleteType={'postal-code'}
                                onChangeText={e => { if (e.length === 9) {
                                                setCep(e)
                                                getData(e);
                                                setLocationcCEP(e);
                                                }; setCep(e) }}
                                onSubmitEditing={() => textInputNum.focus()}
                            />
                        </View>
                    </View>
                    <View style={styles.adress3}>
                        <Text style={styles.adressText}>Nº: </Text>
                        <View style={{...styles.adressInputContainer, width: '40%'}}>
                            <TextInput 
                                ref={ r => textInputNum = r}
                                style={styles.adressInputTop}
                                value={num}
                                keyboardType={"number-pad"}
                                onChangeText={e => setNum(e)}
                                onSubmitEditing={(e) => {
                                    textInputComp.focus();
                                    setLocationcNum(e);
                                }}

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
                        ref={ r => textInputComp = r}
                        onSubmitEditing={() => Keyboard.dismiss()}
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
                        value={logradouro}
                        onChangeText={e => setLogradouro(e)}
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
                
                
                
            </View>
            <View style={styles.botContainer}>
                <MapView 
                    style={styles.map}
                    region={currentRegion} 
                >
                    <Marker 
                        key={"1"}
                        coordinate={markerPosition}
                    />
                </MapView>
                <TouchableOpacity style={styles.button} onPress={() => {updateAdress(); navigation.navigate('Observation')}} >
                    <Text style={styles.buttonText} >Feito !</Text>
                </TouchableOpacity>
            </View>
        </View>
    </TouchableWithoutFeedback>
    )
}

export default connect(state => ({end: state.end}))(Delivery);