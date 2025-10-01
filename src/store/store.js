// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './postsSlice';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    // We can add other reducers here, like 'auth', 'cart', etc.
  },
});