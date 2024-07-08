import { configureStore } from '@reduxjs/toolkit';
import accountReducer from './slice';

const store = configureStore({
  reducer: {
    accounts: accountReducer,
  },
});

export default store;
