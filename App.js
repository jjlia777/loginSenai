import React from 'react';
import {StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';
import { useFonts } from 'expo-font';



export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto"/>
      <Routes />
    </NavigationContainer>
  )
}


