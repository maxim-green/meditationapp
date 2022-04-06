import React from 'react';
import {Image, Pressable, StyleSheet} from 'react-native';
import theme from '../../styles/theme';
import { MoodIcon } from "../_library/MoodIcon";

export const MoodButton = props => {
  const {active, mood, ...restProps} = props;
  return (
    <Pressable {...restProps} style={[styles.button, active && styles.active]}>
      <MoodIcon
        mood={mood}
        size={50}
        color={active && theme.moodIcon.colorInverse}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 80,
    width: 80,
    borderRadius: theme.borderRadius,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.moodButton.borderColor,
    alignItems: 'center',
    justifyContent: 'center'
  },
  active: {
    backgroundColor: theme.moodButton.backgroundColor,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
