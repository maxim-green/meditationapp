import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import theme from '../../styles/theme';

export const NoteInput = props => {
  return (
    <TextInput
      style={styles.input}
      multiline={true}
      textAlignVertical={'top'}
      underlineColorAndroid={'transparent'}
      numberOfLines={6}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: theme.noteInput.borderColor,
    borderRadius: theme.borderRadius,
    marginBottom: 25,
    width: '100%',
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 20,
    paddingBottom: 20,
    fontSize: 18,
    color: theme.app.color,
  },
});
