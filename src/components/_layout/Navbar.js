import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "../../styles/theme";

export const Navbar = ({title}) => {
  const theme = useTheme()
  return (
    <View style={[styles.navbar, theme.navbar]}>
      <Text style={[styles.title, theme.title]}>{title}</Text>
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
    zIndex: 5,
  },
  title: {
    fontSize: 24,
    textTransform: 'uppercase',
    fontWeight: '300',
    letterSpacing: 2,
  },
});
