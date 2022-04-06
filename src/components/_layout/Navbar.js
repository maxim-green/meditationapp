import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import theme from "../../styles/theme";

export const Navbar = ({title}) => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: 80,
    paddingTop: 25,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.titleBar.backgroundColor,
    zIndex: 5,
    ...theme.app.shadow
  },
  title: {
    color: theme.titleBar.color,
    fontSize: 24,
    textTransform: 'uppercase',
    fontWeight: '300',
    letterSpacing: 2,
  },
});
