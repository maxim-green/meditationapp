import { createAsyncThunk } from "@reduxjs/toolkit";
import timer from "../../utils/timer";
import { meditationsStorage, settingsStorage } from "../../utils/storage";
import bell from "../../utils/sound";

export const tick = createAsyncThunk(
  "timer/tick",
  async timeLeft => {
    return timeLeft;
  },
);

// used when timer is stopped or completed naturally
export const complete = createAsyncThunk(
  "timer/complete",
  async (data, { getState }) => {
    bell.play(getState().app.settings.volume);
    return getState().app.settings.duration
  },
);

// used when complete modal is closed to save user inputs (mood and note)
export const finish = createAsyncThunk(
  'timer/finish',
  async (data, {getState}) => {
    return await meditationsStorage.update({id: getState().timer.id, ...data})
  }
)

export const startTimer = createAsyncThunk(
  "timer/startTimer",
  async (value, { dispatch, getState }) => {
    timer.setDuration(getState().app.settings.duration)
    timer.start(
      timeLeft => dispatch(tick(timeLeft)),
      data => dispatch(complete()),
    );
    const payload = {
      id: Date.now().toString(),
      date: Date.now(),
      duration: getState().app.settings.duration,
      pausedAt: [],
      stoppedAt: null,
      text: null,
      mood: 'neutral',
    }
    await meditationsStorage.add(payload);
    // await meditationsStorage.clear()
    return payload
  },
);

export const stopTimer = createAsyncThunk(
  "timer/stopTimer",
  async (value, {getState}) => {
    timer.stop();
    return await meditationsStorage.update({id: getState().timer.id, stoppedAt: getState().timer.timeLeft})
  },
);

export const pauseTimer = createAsyncThunk(
  "timer/pauseTimer",
  async (value, {getState}) => {
    timer.pause();
    return await meditationsStorage.update({id: getState().timer.id, pausedAt: getState().timer.timeLeft})
  },
);

export const resumeTimer = createAsyncThunk(
  "timer/resumeTimer",
  async () => {
    return timer.resume();
  },
);
