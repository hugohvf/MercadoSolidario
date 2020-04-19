import React, { useState } from 'react'
import { View, Text, TouchableOpacity, TextInput, Keyboard } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


import styles from '../styles/main';

const Main = ({ navigation }) => {

  return (
    <View styles={styles.backgroundContainer}>
      <LinearGradient
          colors={['rgba(0,0,0,0.8)', 'transparent']}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
          }}
        >
      <TouchableOpacity style={styles.container} onPress={() => navigation.replace('Orders')}>
        <Text>Ajudar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.container} onPress={() => navigation.replace('List')}>
        <Text>Fazer um pedido</Text>
      </TouchableOpacity>
      </LinearGradient>
    </View>
  )
}

export default Main;