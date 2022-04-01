import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ScreenLayout from './ScreenLayout';
import Slider from '@react-native-community/slider';
import {settingsStorage} from '../utils/storage';

export const SettingsScreen = ({navigation}) => {
  const [volume, setVolume] = useState();

  const getInitialVolume = async () => {
    setVolume(await settingsStorage.getVolume());
  };

  useEffect(() => {
    getInitialVolume();
  }, []);

  const volumeChangeHandler = value => setVolume(value);
  const volumeSlidingCompleteHandler = () => settingsStorage.setVolume(volume);

  return (
    <ScreenLayout title={'Settings'} navigation={navigation}>
      <View style={styles.sliderWrapper}>
        <Text style={styles.settingsItemText}>Volume: </Text>
        <Slider
          minimumTrackTintColor={'#ddd'}
          maximumTrackTintColor={'#ddd'}
          thumbTintColor={'dodgerblue'}
          style={styles.slider}
          minimumValue={0}
          maximumValue={1}
          step={0.01}
          value={volume}
          onValueChange={volumeChangeHandler}
          onSlidingComplete={volumeSlidingCompleteHandler}
        />
      </View>
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  settingsItemText: {
    color: '#666',
    fontSize: 18,
    paddingBottom: 10,
  },
  sliderWrapper: {
    width: '100%',
  },
  slider: {
    width: '100%',
  },
});
