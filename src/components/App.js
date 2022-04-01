import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar, StyleSheet, View} from 'react-native';
import {Navbar} from './Navbar';
import {Timer} from './Timer';
import {HistoryScreen} from './HistoryScreen';
import {TimerScreen} from './TimerScreen';
import {SettingsScreen} from './SettingsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'fade',
        }}>
        <Stack.Screen name={'Timer'} component={TimerScreen} />
        <Stack.Screen name={'History'} component={HistoryScreen} />
        <Stack.Screen name={'Settings'} component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
