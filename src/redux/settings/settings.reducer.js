import {createSlice} from '@reduxjs/toolkit';
import {fetchSettings, setSettings} from './settings.thunk';

const initialState = {
  settings: {},
};

const settingsReducer = createSlice({
  name: 'settings',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchSettings.fulfilled, (state, action) => {
      state.settings = action.payload;
    });

    builder.addCase(setSettings.fulfilled, (state, action) => {
      state.settings = action.payload;
    });
  },
});

export default settingsReducer.reducer;
