import { useTheme } from "../../styles/theme";
import EntypoIcon from 'react-native-vector-icons/Entypo';
import React from 'react';

export const MoodIcon = ({mood, size = 30, color}) => {
  const theme = useTheme()
  const iconColor = color || theme.moodIcon.color
  return (
    <>
      {mood === 'bad' && (
        <EntypoIcon
          name={'emoji-sad'}
          size={size}
          color={iconColor}
        />
      )}
      {mood === 'neutral' && (
        <EntypoIcon
          name={'emoji-neutral'}
          size={size}
          color={iconColor}
        />
      )}
      {mood === 'good' && (
        <EntypoIcon
          name={'emoji-happy'}
          size={size}
          color={iconColor}
        />
      )}
    </>
  );
};
