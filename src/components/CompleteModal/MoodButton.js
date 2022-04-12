import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import { useTheme } from "../../styles/theme";
import { MoodIcon } from "../_library/MoodIcon";

export const MoodButton = props => {
  const theme = useTheme()
  const {active, mood, ...restProps} = props;
  return (
    <Pressable {...restProps} style={[styles.button, theme.moodButton, active && theme.moodButtonActive]}>
      <MoodIcon
        mood={mood}
        size={50}
        color={active && theme.moodIconInverse.color}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 80,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
