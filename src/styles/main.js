import {StyleSheet, Dimensions} from 'react-native';
import Constants from 'expo-constants';

import Colors from './colors';

const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.primary,
    },
    container: {
      flex: 0.5,
      height: 0.5*Dimensions.get('window').height,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: Colors.tertiary,
      fontSize: 32,
      textShadowColor: Colors.quartiary,
      textShadowOffset: {width: 2, height: 2},
      textShadowRadius: 10
    },
    separator: {
      backgroundColor: Colors.tertiary,
      width: '80%',
      height: 1.5,
      alignSelf: 'center'
    }
  });

  export default styles;










































