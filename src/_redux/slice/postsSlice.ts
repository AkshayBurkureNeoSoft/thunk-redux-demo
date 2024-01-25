// src/postsSlice.ts

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPostsApi } from './../api'; // Create an API file

interface Post {
  id: number;
  title: string;
  body: string;
}

interface PostsState {
  posts: Post[];
  editPostData:Partial<Post>;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: PostsState = {
  posts: [],
  editPostData:{},
  status: 'idle',
  error: null,
};

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await fetchPostsApi();
  return response.data;
});



const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost:(state,action) =>{
        state.posts.push(action.payload);
    },
    editPost:(state,action) =>{
        state.editPostData = action.payload;
    },
    deletePost:(state,action) =>{
        state.posts = state.posts?.filter((d)=> d.id !== action.payload.id)
    },
    updatePost:(state,action) =>{
        let rt = state.posts?.findIndex((d,i)=> d.id === action.payload.id )
        state.posts[rt] = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'An error occurred.';
      });
  },
});

export const { addPost , editPost  ,deletePost, updatePost} = postsSlice.actions;

export default postsSlice.reducer;
