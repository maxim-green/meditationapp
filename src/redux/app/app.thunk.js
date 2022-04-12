import {createAsyncThunk} from '@reduxjs/toolkit';
import {settingsStorage} from '../../utils/storage';
import { setTimeLeft } from "../timer/timer.reducer";
import bell from '../../utils/sound'

export const setVolume = createAsyncThunk(
  'app/setVolume',
  async volume => {
    bell.play(volume)
    await settingsStorage.set({volume});
    return volume
  }
)

export const setDuration = createAsyncThunk(
  'app/setDuration',
  async (duration, {dispatch}) => {
    dispatch(setTimeLeft(duration))
    await settingsStorage.set({duration});
    return duration
  }
)

export const setTheme = createAsyncThunk(
  'app/setTheme',
  async (theme) => {
    await settingsStorage.set({theme})
    return theme
  }
)

export const init = createAsyncThunk(
  'app/init',
  async (value, {dispatch}) => {
    const settings = await settingsStorage.get();
    dispatch(setTimeLeft(settings.duration))
    return settings
  }
)
