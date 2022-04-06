import {StyleSheet, View} from 'react-native';
import {Button} from '../_library/Button';
import React from 'react';
import theme from "../../styles/theme";

export const TimerControls = ({
  active,
  paused,
  onStart,
  onPause,
  onResume,
  onStop,
}) => {
  return (
    <View style={styles.controls}>
      {!active && <ControlItem onPress={onStart}>Start</ControlItem>}
      {active && !paused && <ControlItem onPress={onPause}>Pause</ControlItem>}
      {active && paused && <ControlItem onPress={onResume}>Resume</ControlItem>}
      {active && <ControlItem onPress={onStop}>Stop</ControlItem>}
    </View>
  );
};

const ControlItem = ({children, onPress}) => {
  return (
    <View style={styles.controlItem}>
      <Button width={120} height={120} onPress={onPress}>
        {children}
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  controlItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
