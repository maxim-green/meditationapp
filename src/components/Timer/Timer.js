import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import Slider from '@react-native-community/slider';
import {CompleteModal} from '../CompleteModal';
import {getDate, getFormattedTime} from '../../utils/functions';
import {useBell} from '../../utils/sound';
import theme from '../../styles/theme';
import {TimerControls} from './TimerControls';

export const Timer = ({time = 1800, volume = 0.5, onEnd}) => {
  const [secondsLeft, setSecondsLeft] = useState(time);
  const [timerDuration, setTimerDuration] = useState(time);
  const [countdown, setCountdown] = useState(null);
  const [active, setActive] = useState(false);
  const [paused, setPaused] = useState(false);
  const [stoppedAt, setStoppedAt] = useState(null);
  const [pausedAt, setPausedAt] = useState([]);
  const [completeModalShown, setCompleteModalShown] = useState(false);

  const bell = useBell();

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
    bell.play(volume);
  };

  if (secondsLeft <= 0) {
    complete();
    bell.play(volume);
  }


  const onCompleteModalDone = (mood, text) => {
    setCompleteModalShown(false);
    onEnd({
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
      {!active && (
        <View style={styles.sliderWrapper}>
          <Slider
            {...theme.slider}
            style={styles.slider}
            minimumValue={1}
            maximumValue={60}
            step={1}
            value={Math.floor(secondsLeft / 60)}
            onValueChange={value => setSecondsLeft(value * 60)}
          />
        </View>
      )}

      <View style={styles.controlsWrapper}>
        <TimerControls
          active={active}
          paused={paused}
          onStart={start}
          onStop={stop}
          onPause={pause}
          onResume={resume}
        />
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
  controlsWrapper: {
    marginBottom: 35,
    marginTop: 35,
  },

  sliderWrapper: {
    flexDirection: 'row',
    width: '100%',
  },
  slider: {
    width: '100%',
  },
  button: {
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
    marginBottom: 'auto',
    fontWeight: '200',
    fontSize: 72,
    color: theme.timer.color,
  },
});
