import { createSlice } from "@reduxjs/toolkit";
import { init, setDuration, setTheme, setVolume } from "./app.thunk";

const initialState = {
  initialized: false,
  settings: {
    theme: "light",
    duration: 1800,
    volume: 0.5,
  },
};

const appReducer = createSlice({
  name: "settings",
  initialState,
  extraReducers: builder => {
    builder.addCase(init.fulfilled, (state, action) => {
      state.initialized = true;
      state.settings = { ...state.settings, ...action.payload };
    });

    builder.addCase(setTheme.fulfilled, (state, action) => {
      state.settings.theme = action.payload;
    });

    builder.addCase(setVolume.fulfilled, (state, action) => {
      state.settings.volume = action.payload;
    });

    builder.addCase(setDuration.fulfilled, (state, action) => {
      state.settings.duration = action.payload;
    });
  },
});

export default appReducer.reducer;
