import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {Navbar} from './Navbar';
import {BottomNavigation} from './BottomNavigation';
import theme from "../../styles/theme";

export default function ScreenLayout({title, children, navigation}) {
  return (
    <View style={styles.app}>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <Navbar title={title} />
      <View style={styles.content}>{children}</View>
      <BottomNavigation navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: theme.app.backgroundColor,
  },
  content: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
  },
});
