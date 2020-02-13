import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {View} from 'react-native';
import React from 'react';
import List from './pages/list';
import Delivery from './pages/delivery';
import Observation from './pages/observation';
import Conclusion from './pages/conclusion';
import LoadingScreen from './pages/loadingScreen';



const RootStack = createStackNavigator({
    LoadingScreen: {
        screen: LoadingScreen,
        navigationOptions: {
            headerShown: false,
        }
    },
    List: {
        screen: List,
        navigationOptions: {
            title: "Lista de Compras:",
            headerLeft: () => <View></View>
        },
    },
    Delivery: {
        screen: Delivery,
        navigationOptions: {
            title: "Onde devo entregar?",
        },
    },
    Observation: {
        screen: Observation,
        navigationOptions: {
            headerShown: false,
        },
    },
    Conclusion: {
        screen: Conclusion,
        navigationOptions: {
            headerShown: false,
        },
    },
},{
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#282828',
        },
        headerTintColor: '#f2f2f2',
        headerTitleStyle: {
            fontWeight: 'bold',
            fontFamily: 'gotham-black',
          },
    }
}
);




const Routes = createAppContainer(RootStack);
export default Routes;