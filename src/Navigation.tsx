import React, {useCallback, useEffect} from "react";
import {View} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import { Dimensions } from 'react-native';
import Store from "./screens/Store";
import Basket from "./screens/Basket";
import MenuIcon_Store from './svg/MenuIcon_Store';
import MenuIcon_Basket from './svg/MenuIcon_Basket';


const screenWidth = Math.round(Dimensions.get('window').width);
const Tab = createMaterialTopTabNavigator();
const RootStack = createStackNavigator();


const TabNavigator = () => {
    return (
        <Tab.Navigator initialRouteName="Home" tabBarPosition='bottom' backBehavior='order'
                       swipeVelocityImpact={0.5} tabBarOptions={{
            activeTintColor: 'white',
            showIcon: true,
            showLabel: true,
            labelStyle: {color: '#191C63', fontSize: 12, textTransform: 'lowercase', fontWeight: 'bold', marginTop: 8},
            style: {height: 80, width: screenWidth, borderColor: 'transparent', borderTopColor: '#EFEFF4'},
            tabStyle: {position: 'relative'},
            indicatorStyle: {
                backgroundColor: '#191C63',
                height: 43,
                width: 43,
                top: 6,
                borderRadius: 46,
                position: 'relative'
            },
            indicatorContainerStyle: {
               width: screenWidth/2, display: 'flex', justifyContent: 'center', flexDirection: 'row'
            },
            contentContainerStyle: {
                justifyContent: 'flex-start', flexDirection: 'row', marginRight: 0
            }
        }}>
            <Tab.Screen name="Home" component={Store} options={{
                tabBarIcon: ({color}) => (
                    <View style={{marginLeft: -2}}>
                        <MenuIcon_Store 
                            active={color === 'white'}
                        />
                    </View>),
                title: 'store',
            }}/>
            <Tab.Screen name="About" component={Basket} options={{
                tabBarIcon: ({color}) => (
                    <View style={{marginLeft: -1.4}}>
                        <MenuIcon_Basket 
                            active={color === 'white'}
                        />
                    </View>
                ),
                title: 'basket',
            }}/>

        </Tab.Navigator>
    )
}

const Navigation = () => {

    return (
        <NavigationContainer>
            <RootStack.Navigator headerMode='none' mode='modal'>

                <RootStack.Screen name="TabNavigator" component={TabNavigator}/>

            </RootStack.Navigator>
        </NavigationContainer>
    )
};

export default Navigation;