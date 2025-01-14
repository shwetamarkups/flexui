// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import configReducer from './slices/configSlice';
import userReducer from './slices/userSlice';

export const store = configureStore({
  reducer: {
    config: configReducer,
    user: userReducer,
  },
});
