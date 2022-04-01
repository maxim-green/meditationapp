import {createAsyncThunk} from '@reduxjs/toolkit';
import {meditationsStorage} from '../../utils/storage';

export const fetchMeditations = createAsyncThunk(
  'history/fetchMeditations',
  async () => {
    return await meditationsStorage.get();
  },
);
export const addMeditation = createAsyncThunk(
  'history/addMeditation',
  async meditationData => {
    return await meditationsStorage.add(meditationData);
  },
);
export const deleteMeditation = createAsyncThunk(
  'history/deleteMeditation',
  async id => {
    return await meditationsStorage.delete(id);
  },
);
