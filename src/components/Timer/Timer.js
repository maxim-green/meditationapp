import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {useBell} from '../../utils/sound';
import {TimerControls} from './TimerControls';
import {CustomSlider} from '../_library/CustomSlider';
import {TimerDisplay} from './TimerDisplay';
import {CompleteModal} from '../CompleteModal';

export const Timer = ({time = 1800, volume = 0.5, onEnd}) => {
  const [secondsLeft, setSecondsLeft] = useState(time);
  useEffect(() => setSecondsLeft(time), [time]);
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
      date: Date.now(),
      duration: timerDuration,
      stoppedAt,
      pausedAt,
      mood,
      text,
    });
  };

  return (
    <View style={styles.timer}>
      <View style={styles.displayWrapper}>
        <TimerDisplay value={secondsLeft} />
      </View>

      {/*{!active && (*/}
        <View style={styles.sliderWrapper}>
          <CustomSlider
            minimumValue={60}
            maximumValue={3600}
            step={60}
            value={secondsLeft}
            onValueChange={value => setSecondsLeft(value)}
            disabled={active}
          />
        </View>
      {/*)}*/}

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
  timer: {
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
  displayWrapper: {
    marginTop: 'auto',
    marginBottom: 'auto',
  },
});
