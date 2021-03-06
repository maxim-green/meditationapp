import { useTheme } from "../../styles/theme";
import Slider from '@react-native-community/slider';
import React from 'react';
import {StyleSheet} from 'react-native';

export const CustomSlider = (props) => {
  const theme = useTheme()

  return (
    <Slider
      {...theme.slider}
      style={styles.slider}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  slider: {
    width: '100%',
  },
});
