// App.jsx
import "react-native-gesture-handler";
import React from 'react';
import Home from "./screens/Home";
import Attractions from "./screens/Attractions";
import Restaurants from "./screens/Restaurants";
import { useRoute } from "@react-navigation/native"


import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import { Text,View , Button,StyleSheet,style} from 'react-native';
import Hospitals from "./screens/Hospitals";
import Business from "./screens/Business";

export default function App(){
  const Stack  = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Attractions" component={Attractions}/>
        <Stack.Screen name="Restaurants" component={Restaurants}/>
        <Stack.Screen name="Hospitals" component={Hospitals}/>
        <Stack.Screen name="Business" component={Business}/>
      </Stack.Navigator>
    </NavigationContainer>
   
    );
};