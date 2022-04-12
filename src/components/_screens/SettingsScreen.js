import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ScreenLayout from "../_layout/ScreenLayout";
import { useDispatch, useSelector } from "react-redux";
import { setTheme, setVolume } from "../../redux/app/app.thunk";
import { CustomSlider } from "../_library/CustomSlider";
import { useTheme } from "../../styles/theme";
import { Button } from "../_library/Button";

export const SettingsScreen = ({navigation}) => {
  const theme = useTheme()
  const dispatch = useDispatch();
  const volume = useSelector(state => state.app.settings.volume);
  const currentTheme = useSelector(state => state.app.settings.theme)

  const [sliderValue, setSliderValue] = useState(volume);
  const volumeChangeHandler = value => setSliderValue(value);
  const volumeSlidingCompleteHandler = () => {
    dispatch(setVolume(sliderValue));
  };

  const themeToggleHandler = () => {
    if (currentTheme === 'light') {
      dispatch(setTheme('dark'))
    }
    if (currentTheme === 'dark') {
      dispatch(setTheme('light'))
    }
  }

  return (
    <ScreenLayout title={'Settings'} navigation={navigation}>
      <View style={styles.wrapper}>
        <View style={styles.item}>
          <Text style={[styles.settingsItemText, theme.text]}>Volume: </Text>
          <CustomSlider
            minimumValue={0}
            maximumValue={1}
            step={0.01}
            value={sliderValue}
            onValueChange={volumeChangeHandler}
            onSlidingComplete={volumeSlidingCompleteHandler}
          />
        </View>

        <View style={styles.item}>
          <Text style={[styles.settingsItemText, theme.text]}>Theme: </Text>
          <View style={styles.themeButtons}>
            <Button onPress={themeToggleHandler}>
              {currentTheme}
            </Button>
          </View>
        </View>
      </View>
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
    width: '100%',
    flex: 1,
  },
  themeButtons: {
    flexDirection: 'row',
  },
  item: {
    marginBottom: 40,
    width: '100%',
  },
  settingsItemText: {
    fontSize: 18,
    paddingBottom: 10,
    marginLeft: 15,
  },
});
