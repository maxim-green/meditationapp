import { createSlice } from "@reduxjs/toolkit";
import {
  complete,
  finish,
  initTimer,
  pauseTimer,
  resumeTimer,
  setDuration,
  startTimer,
  stopTimer,
  tick,
} from "./timer.thunk";

const initialState = {
  id: null,
  duration: 1800,
  timeLeft: 1800,
  isActive: false,
  isPaused: false,
  isCompleteModalShown: false,
};

const timerReducer = createSlice({
  name: "settings",
  initialState,
  extraReducers: builder => {
    builder.addCase(initTimer.fulfilled, (state, action) => {
      state.duration = action.payload;
      state.timeLeft = action.payload;
    });

    builder.addCase(startTimer.fulfilled, (state, action) => {
      state.id = action.payload.id;
      state.isActive = true;
    });

    builder.addCase(setDuration.fulfilled, (state, action) => {
      state.timeLeft = action.payload;
      state.duration = action.payload;
    });

    builder.addCase(tick.fulfilled, (state, action) => {
      state.timeLeft = action.payload;
    });

    builder.addCase(complete.fulfilled, (state, action) => {
      state.isCompleteModalShown = true;
      state.isActive = false;
      state.isPaused = false;
      state.timeLeft = state.duration;
    });

    builder.addCase(stopTimer.fulfilled, (state, action) => {

    });

    builder.addCase(finish.fulfilled, (state, action) => {
      state.id = null;
      state.isCompleteModalShown = false;
    });

    builder.addCase(pauseTimer.fulfilled, (state, action) => {
      state.isPaused = true;
    });

    builder.addCase(resumeTimer.fulfilled, (state, action) => {
      state.isPaused = false;
    });
  },
});

export default timerReducer.reducer;
