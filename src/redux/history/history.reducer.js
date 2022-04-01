import { createSlice } from "@reduxjs/toolkit";
import { addMeditation, deleteMeditation, fetchMeditations } from "./history.thunk";

const initialState = {
  meditations: [],
};

const historyReducer = createSlice({
  name: 'history',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchMeditations.fulfilled, (state, action) => {
      state.meditations = action.payload;
    });

    builder.addCase(deleteMeditation.fulfilled, (state, action) => {
      state.meditations = state.meditations.filter(
        meditation => meditation.id !== action.payload,
      );
    });

    builder.addCase(addMeditation.fulfilled, (state, action) => {
      state.meditations.push(action.payload);
    });
  },
});

export default historyReducer.reducer;
