import { createSlice } from "@reduxjs/toolkit";
import {
  complete,
  finish,
  pauseTimer,
  resumeTimer,
  startTimer,
  stopTimer,
  tick,
} from "./timer.thunk";

const initialState = {
  id: null,
  timeLeft: 1800,
  isActive: false,
  isPaused: false,
  isCompleteModalShown: false,
};

const timerReducer = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setTimeLeft: (state, action) => {
      state.timeLeft = action.payload
    }
  },
  extraReducers: builder => {
    builder.addCase(startTimer.fulfilled, (state, action) => {
      state.id = action.payload.id;
      state.isActive = true;
    });

    builder.addCase(tick.fulfilled, (state, action) => {
      state.timeLeft = action.payload;
    });

    builder.addCase(complete.fulfilled, (state, action) => {
      state.timeLeft = action.payload
      state.isCompleteModalShown = true;
      state.isActive = false;
      state.isPaused = false;
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

export const {setTimeLeft} = timerReducer.actions

export default timerReducer.reducer;
