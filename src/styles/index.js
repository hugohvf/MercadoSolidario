import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';


const styles = StyleSheet.create({
    backgroundContainer: {
        backgroundColor: '#f2f2f2',
        flex: 1,
        justifyContent: 'space-between',
        height: 60,
    },
    container: {
        backgroundColor: '#f2f2f2',
        flex: 1,
        justifyContent: 'space-between',
        height: 60,
        paddingTop: Constants.statusBarHeight,
    },
    container2: {
        flex: 1,
        justifyContent: 'space-around',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#282828',
        alignItems: "center",
    },
    flatlist:{
        
    },
    list: {
        
    },
    listContainer: {
        marginTop: 2,
        flexDirection: 'row',
        alignItems: 'center',
    },
    button: {
        height: 70,
        backgroundColor: '#bfff2c',
        alignItems: "center",
        justifyContent: 'center',
    },
    buttonText: {
        color: '#25291a',
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        fontSize: 30,
        fontStyle: "italic",
        fontFamily: 'gotham-black',
    },
    minusIcon: {
        marginLeft: 5,
        marginRight: 5,
    },
    deleteIcon: {
        marginLeft: 5,
        marginRight: 5,
    }, 
    separator: {
        marginTop: 4,
        width: '100%',
        height: 0.4,
        backgroundColor: '#242424',
        borderRadius: 50,
        alignSelf: 'center',
    },
    textInput: {
        width: "67%",
        fontSize: 16,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
        fontFamily: 'gotham-light',
    },
    addItem: {
        alignSelf: 'center',
        marginTop: 5,
        marginBottom: 30,
        color: '#444',
        fontWeight: 'bold',
        fontFamily: 'gotham-light',
    },
    quantity: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'gotham-light'
    },
    adress1: {
        padding: 3,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    adress2: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flex: 1,
    },
    adress3: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        flex: 1,
    },
    adressText: {
        fontSize: 21,
        fontFamily: 'gotham-light',
    },
    adressInputContainer: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#282828',
        paddingLeft: 5,
        paddingRight: 5,
        justifyContent: 'center',
    },
    adressTopContainer: {
        margin: 5,
    },
    adressInputTop: {
        fontSize: 20,      
        fontFamily: 'gotham-light', 
    },
    adressInput: {
        fontFamily: 'gotham-light',
        fontSize: 16,   
    },
    space: {
        height: '5%',
    },
    map: {
        flex: 1,
    },
    botContainer: {
        flex: 1,
    },
    observationText: {
        justifyContent: "center",
        alignSelf: 'center',
        marginTop: 10,
        fontFamily: 'gotham-black',
        fontSize: 20,
        textAlign: 'center',
    },
    observationContainer: {
        
    },
    observationInput: {
        fontSize: 16,   
        fontFamily: 'gotham-light',
    },
    observationInputContainer: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#282828',
        paddingLeft: 5,
        paddingRight: 5,
        margin: 10,   
    },
    endTextContainer: {
        alignItems: "center",
        justifyContent: 'center',
        width: '80%'
    },
    endText: {
        fontFamily: 'gotham-black',
        fontSize: 28,
        color: '#f3f3f3',
        textAlign: 'center',
    },
    endTextDate: {
        fontFamily: 'gotham-black',
        fontSize: 28,
        color: '#f3f3f3',
        textAlign: 'center',
    },
    endTextPoint: {
        fontFamily: 'gotham-black',
        fontSize: 28,
        color: '#bbdf5b'
    },
    imageEnd: {
        width: 100,
        height: 100,
        position: "absolute",
        bottom: 0,
        right: 0,
    },
});

export default styles;