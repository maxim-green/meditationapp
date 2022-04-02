import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import theme from '../../styles/theme';

export const Button = props => {
  const {children, width, height, ...restProps} = props;
  return (
    <Pressable
      {...restProps}
      style={({pressed}) => [
        {
          backgroundColor: pressed
            ? theme.button.backgroundColorPressed
            : theme.button.backgroundColor,
        },
        styles.button,
        {width, height},
      ]}>
      <Text style={styles.buttonText}>{children}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: theme.borderRadius,
    paddingTop: 15,
    paddingBottom: 15,
    paddingRight: 20,
    paddingLeft: 20,
  },
  buttonText: {
    color: theme.button.color,
    fontSize: 20,
    letterSpacing: 1,
  },
});
