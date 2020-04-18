import React, { useState } from 'react'
import { View, Text, TouchableOpacity, TextInput, Keyboard } from 'react-native';

const Main = () => {

  return (
    <View>
      <Text>Quer ajudar?</Text>
      <TouchableOpacity>
        Ajudar
      </TouchableOpacity>
      <TouchableOpacity>
        Fazer um pedido
      </TouchableOpacity>
    </View>
  )
}

export default Main;