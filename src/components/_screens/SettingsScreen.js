import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ScreenLayout from '../_layout/ScreenLayout';
import Slider from '@react-native-community/slider';
import {useDispatch, useSelector} from 'react-redux';
import {setSettings} from '../../redux/settings/settings.thunk';
import {useBell} from '../../utils/sound';
import { CustomSlider } from "../_library/CustomSlider";
import theme from "../../styles/theme";

export const SettingsScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const volume = useSelector(state => state.settings.settings.volume);

  const bell = useBell();

  const [sliderValue, setSliderValue] = useState(volume);
  const volumeChangeHandler = value => setSliderValue(value);
  const volumeSlidingCompleteHandler = () => {
    dispatch(setSettings({volume: sliderValue}));
    bell.play(sliderValue);
  };

  return (
    <ScreenLayout title={'Settings'} navigation={navigation}>
      <View style={styles.item}>
        <Text style={styles.settingsItemText}>Volume: </Text>
        <CustomSlider
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
  item: {
    width: '100%',
  },
  settingsItemText: {
    color: theme.app.color,
    fontSize: 18,
    paddingBottom: 10,
    marginLeft: 15,
  },
});
