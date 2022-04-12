import {configureStore} from '@reduxjs/toolkit';
import historyReducer from './history/history.reducer';
import appReducer from './app/app.reducer';
import timerReducer from './timer/timer.reducer';

export const store = configureStore({
  reducer: {
    history: historyReducer,
    app: appReducer,
    timer: timerReducer,
  },
});
