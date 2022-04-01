import React from 'react'
import { Image, Pressable, StyleSheet } from "react-native";

export const MoodButton = (props) => {
  const {active, image, ...restProps} = props
  return <Pressable {...restProps} style={[styles.button, (active && styles.active)]}>
    {image && <Image style={styles.image} source={image} />}
  </Pressable>
}

const styles = StyleSheet.create({
  button: {
    height: 90,
    width: 90,
    borderRadius: 35,
  },
  active: {
    backgroundColor: 'dodgerblue',
  },
  image: {
    width: '100%',
    height: '100%',
  }
})
