import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { StatusBar, StyleSheet, Text, View } from "react-native";
import {Navbar} from './Navbar';
import { BottomNavigation } from "./BottomNavigation";

export default function ScreenLayout({title, children, navigation}) {
  return (
    <View style={styles.app}>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <Navbar title={title} navigation={navigation}/>
      <View style={styles.content}>{children}</View>
      <BottomNavigation navigation={navigation}/>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
  content: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20
  },
  text: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
  },
});
