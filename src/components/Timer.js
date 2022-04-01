import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import Slider from '@react-native-community/slider';
import {playSound} from '../utils/sound';
import bell from '../../assets/bell.mp3';
import {CompleteModal} from './CompleteModal';
import {getDate, getFormattedTime} from '../utils/functions';

export const Timer = ({time = 60, onDone, volume}) => {
  const [secondsLeft, setSecondsLeft] = useState(time * 60);
  const [countdown, setCountdown] = useState(null);
  const [active, setActive] = useState(false);
  const [stoppedAt, setStoppedAt] = useState(null);
  const [paused, setPaused] = useState(false);
  const [pausedAt, setPausedAt] = useState([]);
  const [timerDuration, setTimerDuration] = useState(time);

  const [completeModalShown, setCompleteModalShown] = useState(false);

  const start = () => {
    setTimerDuration(secondsLeft);
    setStoppedAt(null);
    setPausedAt([]);
    setActive(true);
    if (!countdown) {
      setCountdown(
        setInterval(() => {
          setSecondsLeft(prevSecondsLeft => prevSecondsLeft - 1);
        }, 1000),
      );
    }
  };

  const pause = () => {
    setPaused(true);
    setPausedAt(prev => [...prev, secondsLeft]);
    if (countdown) {
      clearInterval(countdown);
    }
    setCountdown(null);
  };

  const resume = () => {
    setPaused(false);
    if (!countdown) {
      setCountdown(
        setInterval(() => {
          setSecondsLeft(prevSecondsLeft => prevSecondsLeft - 1);
        }, 1000),
      );
    }
  };

  const complete = () => {
    if (countdown) {
      clearInterval(countdown);
    }
    setCountdown(null);
    setCompleteModalShown(true);
    setActive(false);
    setPaused(false);
    setSecondsLeft(timerDuration);
  };

  const stop = () => {
    setStoppedAt(secondsLeft);
    complete();
    // volume changes only after app restart
    // todo: refactor to use state management library
    playSound(bell, volume);
  };

  if (secondsLeft <= 0) {
    complete();
    playSound(bell, volume);
  }

  // used in modal
  const onCompleteModalDone = (mood, text) => {
    setCompleteModalShown(false);

    onDone({
      id: Date.now().toString(),
      date: getDate(),
      duration: timerDuration,
      stoppedAt,
      pausedAt,
      mood,
      text,
    });
  };

  return (
    <View style={styles.wrapper}>
      <Text style={styles.time}>{getFormattedTime(secondsLeft)}</Text>
      <View style={styles.sliderWrapper}>
        <Slider
          minimumTrackTintColor={'#ddd'}
          maximumTrackTintColor={'#ddd'}
          thumbTintColor={'dodgerblue'}
          style={styles.slider}
          minimumValue={1}
          maximumValue={60}
          step={1}
          value={Math.floor(secondsLeft / 60)}
          onValueChange={value => setSecondsLeft(value * 60)}
        />
      </View>

      {/* todo: refactor to separate component(s) */}
      <View style={styles.controls}>
        {!active && (
          <Pressable
            style={({pressed}) => [
              {backgroundColor: pressed ? 'blue' : 'dodgerblue'},
              styles.button,
            ]}
            onPress={start}>
            <Text style={styles.buttonText}>Start</Text>
          </Pressable>
        )}
        {active && !paused && (
          <Pressable
            style={({pressed}) => [
              {backgroundColor: pressed ? 'blue' : 'dodgerblue'},
              styles.button,
            ]}
            onPress={pause}>
            <Text style={styles.buttonText}>Pause</Text>
          </Pressable>
        )}
        {active && paused && (
          <Pressable
            style={({pressed}) => [
              {backgroundColor: pressed ? 'blue' : 'dodgerblue'},
              styles.button,
            ]}
            onPress={resume}>
            <Text style={styles.buttonText}>Resume</Text>
          </Pressable>
        )}
        {active && (
          <Pressable
            style={({pressed}) => [
              {backgroundColor: pressed ? 'blue' : 'dodgerblue'},
              styles.button,
            ]}
            onPress={stop}>
            <Text style={styles.buttonText}>Stop</Text>
          </Pressable>
        )}
      </View>

      {completeModalShown && <CompleteModal onDone={onCompleteModalDone} />}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  controls: {
    flexDirection: 'row',
    marginBottom: 35,
    marginTop: 35,
  },
  sliderWrapper: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 'auto',
  },
  slider: {
    width: '100%',
  },
  button: {
    width: 120,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    marginLeft: 15,
    marginRight: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 22,
    letterSpacing: 1,
  },
  time: {
    marginTop: 'auto',
    fontSize: 36,
    color: '#666',
  },
});
