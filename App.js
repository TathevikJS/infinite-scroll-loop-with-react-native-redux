import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import store from './src/Redux/index'
import { Provider } from 'react-redux'
import Navigation from './src/Navigation/Navigation';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar />
        <Navigation />
      </NavigationContainer>
    </Provider>
  );
}



  