import React from "react";
import { StyleSheet, View } from "react-native";
import { TimerControls } from "./TimerControls";
import { CustomSlider } from "../_library/CustomSlider";
import { TimerDisplay } from "./TimerDisplay";
import { CompleteModal } from "../CompleteModal";
import { useDispatch, useSelector } from "react-redux";
import { finish, pauseTimer, resumeTimer, startTimer, stopTimer } from "../../redux/timer/timer.thunk";
import { setDuration } from "../../redux/app/app.thunk";

export const Timer = () => {
  const dispatch = useDispatch();
  const active = useSelector(state => state.timer.isActive);
  const paused = useSelector(state => state.timer.isPaused);
  const timeLeft = useSelector(state => state.timer.timeLeft);
  console.log(timeLeft)
  const completeModalShown = useSelector(
    state => state.timer.isCompleteModalShown,
  );

  const start = () => {
    dispatch(startTimer());
  };

  const pause = () => {
    dispatch(pauseTimer());
  };

  const resume = () => {
    dispatch(resumeTimer());
  };

  const stop = () => {
    dispatch(stopTimer());
  };

  const durationChangeHandler = value => {
    dispatch(setDuration(value));
  };

  const onCompleteModalDone = (mood, text) => {
    dispatch(finish({mood, text}));
  };

  return (
    <View style={styles.timer}>
      <View style={styles.displayWrapper}>
        <TimerDisplay value={timeLeft} />
      </View>


        <View style={styles.sliderWrapper}>
          {!active && (
          <CustomSlider
            minimumValue={60}
            maximumValue={3600}
            step={60}
            value={timeLeft}
            onValueChange={durationChangeHandler}
            disabled={active}
          />
          )}
        </View>


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
    padding: 20,
  },
  controlsWrapper: {
    marginTop: 40,
    marginBottom: 20,
  },
  sliderWrapper: {
    flexDirection: 'row',
    width: '100%',
    height: 20,
  },
  displayWrapper: {
    marginTop: 'auto',
    marginBottom: 'auto',
  },
});
