import {getMoonPhase} from '../../utils/functions';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from "../../styles/theme";
import React from 'react';

export const MoonPhaseIcon = ({date, size = 30}) => {
  const theme = useTheme()
  const phase = getMoonPhase(date);
  return (
    <>
      {phase === 'New' && (
        <MaterialCommunityIcon
          name={'moon-new'}
          size={size}
          color={theme.moonIcon.color}
        />
      )}
      {phase === 'Waxing Crescent' && (
        <MaterialCommunityIcon
          name={'moon-waxing-crescent'}
          size={size}
          color={theme.moonIcon.color}
        />
      )}
      {phase === 'First Quarter' && (
        <MaterialCommunityIcon
          name={'moon-first-quarter'}
          size={size}
          color={theme.moonIcon.color}
        />
      )}
      {phase === 'Waxing Gibbous' && (
        <MaterialCommunityIcon
          name={'moon-waxing-gibbous'}
          size={size}
          color={theme.moonIcon.color}
        />
      )}
      {phase === 'Full' && (
        <MaterialCommunityIcon
          name={'moon-full'}
          size={size}
          color={theme.moonIcon.color}
        />
      )}
      {phase === 'Waning Gibbous' && (
        <MaterialCommunityIcon
          name={'moon-waning-gibbous'}
          size={size}
          color={theme.moonIcon.color}
        />
      )}
      {phase === 'Last Quarter' && (
        <MaterialCommunityIcon
          name={'moon-last-quarter'}
          size={size}
          color={theme.moonIcon.color}
        />
      )}
      {phase === 'Waning Crescent' && (
        <MaterialCommunityIcon
          name={'moon-waning-crescent'}
          size={size}
          color={theme.moonIcon.color}
        />
      )}
    </>
  );
};
