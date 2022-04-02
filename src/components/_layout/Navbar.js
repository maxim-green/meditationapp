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
    paddingTop: 35,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.navbar.backgroundColor,
  },
  title: {
    color: theme.navbar.color,
    fontSize: 18,
    letterSpacing: 1,
  },
});
