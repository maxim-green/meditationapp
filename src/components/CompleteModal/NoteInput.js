import {StyleSheet, TextInput} from 'react-native';
import React from 'react';
import { useTheme } from "../../styles/theme";

export const NoteInput = props => {
  const theme = useTheme()
  return (
    <TextInput
      style={[styles.input, theme.noteInput]}
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
    marginBottom: 25,
    width: '100%',
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 20,
    paddingBottom: 20,
  },
});
