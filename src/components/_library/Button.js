import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import theme, { useTheme } from "../../styles/theme";

export const Button = props => {
  const theme = useTheme()
  const {children, width, height, ...restProps} = props;
  return (
    <Pressable
      style={({pressed}) => [
        styles.button,
        theme.button,
        {
          backgroundColor: pressed
            ? theme.buttonPressed.backgroundColor
            : theme.button.backgroundColor,
        },
        {width, height},
      ]}
      {...restProps}
    >
      <Text style={[styles.buttonText, theme.buttonText]}>{children}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 15,
    paddingBottom: 15,
    paddingRight: 20,
    paddingLeft: 20,
  },
  buttonText: {
    fontSize: 20,
    letterSpacing: 1,
    textTransform: 'capitalize',
  },
});
