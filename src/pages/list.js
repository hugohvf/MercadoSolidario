import React, { useEffect, useState } from 'react';

import { View, Text, FlatList, TouchableOpacity, TextInput, KeyboardAvoidingView, SafeAreaView, ScrollView } from 'react-native';
import styles from "../styles";
import { useSelector, useDispatch, connect } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';

const List = ({navigation, dispatch, lista}) => {
    let nextItem = React.createRef();

    function addItem() {
        dispatch({
            type: "NEW_ITEM",
            new: {
                id: Math.random(),
                qtd: 1,
                desc: "",
            },
        });
    }

    const renderItem = ({item, index}) => {
        return (
            <View>
            <View style={styles.listContainer}>
                <TouchableOpacity style={styles.minusIcon} onPress={() => {
                    if(item.qtd>1)dispatch({type: "SUBTRACT_QTD", index})
                    }} >
                    <AntDesign size={25} name="minus" />
                </TouchableOpacity>
                <Text style={styles.quantity}>{item.qtd}</Text>
                <TouchableOpacity style={styles.minusIcon} onPress={() => dispatch({type: "ADD_QTD", index})} >
                    <AntDesign size={25} name="plus" />
                </TouchableOpacity>
                <TextInput 
                style={styles.textInput} 
                onChangeText={(text) => dispatch({type: "UPDATE_TEXT", value: text, index})}
                ref={ref => {nextItem = ref}}
                onSubmitEditing={() => {
                    if(lista[lista.length - 1].desc!== ""){
                    addItem();
                    }               
                                        }}
                
                >{item.desc}</TextInput>
                <TouchableOpacity style={styles.deleteIcon} onPress={() => dispatch({type: "DELETE_ITEM", id: item.id})} >
                    <AntDesign size={25} name="delete" />
                </TouchableOpacity>
            </View>

            </View>
        );
    };

    return (
        <KeyboardAvoidingView style={styles.backgroundContainer} behavior={Platform.OS === "ios" ? "padding" : "padding"} > 
            <ScrollView >
                <FlatList
                style={styles.flatlist}
                contentContainerStyle={styles.list}
                data={lista}
                keyExtractor={item => item.id.toString()}
                renderItem={renderItem}
                enableSnap={true}
                ItemSeparatorComponent={() => <View style={styles.separator}></View>}
                ListFooterComponent={
                <TouchableOpacity onPress={() => addItem()}>
                    <Text style={styles.addItem}>Adicionar Item</Text>
                </TouchableOpacity>
                }
                />
            </ScrollView>
            <View >
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Delivery')} >
                    <Text style={styles.buttonText} >Feito !</Text>
                </TouchableOpacity>
            </View>   
        </KeyboardAvoidingView>
    );
}

export default connect(state => ({lista: state.lista}))(List);