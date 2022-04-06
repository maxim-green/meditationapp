import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {MoodButton} from './MoodButton';
import theme from '../../styles/theme';

export const MoodPicker = ({value, onChange}) => {
  const [mood, setMood] = useState(value);

  useEffect(() => {
    if (onChange) {
      onChange(mood);
    }
  }, [mood]);

  return (
    <View style={styles.buttons}>
      <MoodButton
        onPress={() => setMood('bad')}
        active={mood === 'bad'}
        mood={'bad'}
      />
      <MoodButton
        onPress={() => setMood('neutral')}
        active={mood === 'neutral'}
        mood={'neutral'}
      />
      <MoodButton
        onPress={() => setMood('good')}
        active={mood === 'good'}
        mood={'good'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: theme.app.color,
    marginBottom: 5,
  },
  buttons: {
    flexDirection: 'row',
    width: '95%',
    justifyContent: 'space-around',
  },
});
