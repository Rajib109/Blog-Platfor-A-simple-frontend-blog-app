// src/store/postsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// 1. Create an async thunk for fetching posts
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=12');
  return response.data;
});

// 2. Create the posts slice
const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    items: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {}, // We can add reducers for actions like 'addPost' later
  // 3. Handle the async thunk's states
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload; // Add fetched posts to the state
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default postsSlice.reducer;