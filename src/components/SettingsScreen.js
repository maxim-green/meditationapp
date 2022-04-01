import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ScreenLayout from './ScreenLayout';
import Slider from '@react-native-community/slider';
import {useDispatch, useSelector} from 'react-redux';
import {setSettings} from '../redux/settings/settings.thunk';

// todo: move to useSound hook. Hook loads volume setting and returns playsound function.
import {playSound} from '../utils/sound';
import bell from '../../assets/bell.mp3';

export const SettingsScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const volume = useSelector(state => state.settings.settings.volume);

  const [sliderValue, setSliderValue] = useState(volume);
  const volumeChangeHandler = value => setSliderValue(value);
  const volumeSlidingCompleteHandler = () => {
    dispatch(setSettings({volume: sliderValue}));
    playSound(bell, sliderValue)
  };

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
          value={sliderValue}
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
