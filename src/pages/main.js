import React, { useState } from 'react'
import { View, Text, TouchableOpacity, TextInput, Keyboard } from 'react-native';

const Main = ({ navigation }) => {

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.replace('Orders')}>
        <Text>Ajudar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.replace('List')}>
        <Text>Fazer um pedido</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Main;