import {StyleSheet, Dimensions} from 'react-native';
import Constants from 'expo-constants';


const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'orange',
    },
    container: {
      flex: 0.5,
      height: 0.5*Dimensions.get('window').height,
    }
  });

  export default styles;










































