import React from 'react'
import { Pressable, StyleSheet, Text } from "react-native";

export const Button = (props) => {
  const {children, ...restProps} = props
  return <Pressable {...restProps} style={styles.button}>
    <Text style={styles.buttonText}>{children}</Text>
  </Pressable>
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "dodgerblue",
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 16,
    paddingLeft: 16,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
})
