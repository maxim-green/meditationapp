import {getFormattedTime} from '../../utils/functions';
import {StyleSheet, Text} from 'react-native';
import React from 'react';
import theme from '../../styles/theme';

export const TimerDisplay = ({value}) => (
  <Text style={styles.display}>{getFormattedTime(value)}</Text>
);

const styles = StyleSheet.create({
  display: {
    fontWeight: '200',
    fontSize: 72,
    color: theme.timer.color,
  },
});
