import {configureStore} from '@reduxjs/toolkit';
import historyReducer from './history/history.reducer';
import settingsReducer from './settings/settings.reducer';
import timerReducer from './timer/timer.reducer';

export const store = configureStore({
  reducer: {
    history: historyReducer,
    settings: settingsReducer,
    timer: timerReducer,
  },
});
