import theme from '../../styles/theme';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import React from 'react';

export const MoodIcon = ({mood, size = 30, color = theme.moodIcon.color}) => {
  return (
    <>
      {mood === 'bad' && (
        <EntypoIcon
          name={'emoji-sad'}
          size={size}
          color={color || theme.moodIcon.color}
        />
      )}
      {mood === 'neutral' && (
        <EntypoIcon
          name={'emoji-neutral'}
          size={size}
          color={color || theme.moodIcon.color}
        />
      )}
      {mood === 'good' && (
        <EntypoIcon
          name={'emoji-happy'}
          size={size}
          color={color || theme.moodIcon.color}
        />
      )}
    </>
  );
};
