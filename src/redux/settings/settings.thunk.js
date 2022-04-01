import {createAsyncThunk} from '@reduxjs/toolkit';
import {settingsStorage} from '../../utils/storage';

export const fetchSettings = createAsyncThunk(
  'settings/fetchSettings',
  async () => {
    return await settingsStorage.get();
  },
);

export const setSettings = createAsyncThunk(
  'settings/setSettings',
  async settings => {
    return await settingsStorage.set(settings);
  },
);
