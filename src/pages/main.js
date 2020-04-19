import React, { useState } from 'react'
import { View, Text, TouchableOpacity, TextInput, Keyboard } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import styles from '../styles/main';
import Colors from '../styles/colors';


const Main = ({ navigation }) => {

  return (
    <View style={styles.backgroundContainer}>
      <LinearGradient
          colors={[Colors.secundary, Colors.primary]}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
          }}
        >
      <TouchableOpacity style={styles.container} onPress={() => navigation.replace('Orders')}>
        <Text style={styles.text}>Ajudar</Text>
      </TouchableOpacity>
      <View style={styles.separator}></View>
      <TouchableOpacity style={styles.container} onPress={() => navigation.replace('List')}>
        <Text style={styles.text}>Fazer um pedido</Text>
      </TouchableOpacity>
      </LinearGradient>
    </View>
  )
}

export default Main;