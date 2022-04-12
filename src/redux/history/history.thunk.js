import {createAsyncThunk} from '@reduxjs/toolkit';
import {meditationsStorage} from '../../utils/storage';

export const fetchMeditations = createAsyncThunk(
  'history/fetchMeditations',
  async () => {
    return await meditationsStorage.get();
  },
);
export const deleteMeditation = createAsyncThunk(
  'history/deleteMeditation',
  async id => {
    return await meditationsStorage.delete(id);
  },
);
