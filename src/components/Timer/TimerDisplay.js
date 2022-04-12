import {getFormattedTime} from '../../utils/functions';
import {Text} from 'react-native';
import React from 'react';
import { useTheme } from "../../styles/theme";

export const TimerDisplay = ({value}) => {
  const theme = useTheme()
  return <Text style={theme.timerDisplay}>{getFormattedTime(value)}</Text>
}
