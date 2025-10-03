// src/store/postsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// This thunk remains the same
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=12');
  return response.data;
});

// 1. Create a NEW async thunk for adding a post
export const addNewPost = createAsyncThunk('posts/addNewPost', async (initialPost) => {
  // initialPost will be an object like { title: 'Hello', body: 'World' }
  const response = await axios.post('https://jsonplaceholder.typicode.com/posts', initialPost);
  return response.data; // The API will return the new post, usually with an ID
});


const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Cases for fetchPosts remain the same
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      // 2. Add the case for when a new post is successfully created
      .addCase(addNewPost.fulfilled, (state, action) => {
        // Add the new post to our existing array of items
        state.items.push(action.payload);
      });
  },
});

export default postsSlice.reducer;