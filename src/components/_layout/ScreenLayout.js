import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {Navbar} from './Navbar';
import {BottomNavigation} from './BottomNavigation';
import { useTheme } from "../../styles/theme";

export default function ScreenLayout({title, children, navigation}) {
  const theme = useTheme()

  return (
    <View style={[styles.app, theme.app]}>
      <StatusBar translucent={true} backgroundColor={'transparent'} barStyle={theme.statusBar.barStyle} />
      <Navbar title={title} />
      <View style={styles.content}>{children}</View>
      <BottomNavigation navigation={navigation} />
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
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
  },
});
