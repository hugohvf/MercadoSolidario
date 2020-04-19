import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {View} from 'react-native';
import React from 'react';
import List from './pages/list';
import Delivery from './pages/delivery';
import Observation from './pages/observation';
import Conclusion from './pages/conclusion';
import LoadingScreen from './pages/loadingScreen';
import Main from './pages/main';
import Orders from './pages/entrega/orders';
import ClientOrder from './pages/entrega/clientOrder';
import Dones from './pages/entrega/dones';


const RootStack = createStackNavigator({
    LoadingScreen: {
        screen: LoadingScreen,
        navigationOptions: {
            headerShown: false,
        }
    },
    Main: {
        screen: Main,
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
    Orders: {
        screen: Orders,
        navigationOptions: {
            title: "Pedidos:",
            headerLeft: () => <View></View>
        },
    },
    Dones: {
        screen: Dones,
        navigationOptions: {
            title: "Pedidos concluídos:",
        },
    },
    ClientOrder: {
        screen: ClientOrder,
        navigationOptions: {

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