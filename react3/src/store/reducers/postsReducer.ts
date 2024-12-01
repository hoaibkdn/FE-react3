/** @format */

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from '../../constants';
import { PostState, Post as PostModel } from './../../types/post.type';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const postsResponse = await fetch(BASE_URL + '/posts'); // Promise()

  if (postsResponse.status === 200 ) {
    // fetch users
    const postData = await postsResponse.json(); // Response()
    return {
      error: false,
      posts: postData,
    };
  }
  return {
    error: true,
  };
});

const initialState: PostState = {
  ids: [],
  objList: {},
  stage: 'idle', // loading, successed, failed
  error: false,
};

const posts = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    editPost: (state, action) => {
      const { id } = action.payload;
      const existingPost = state.objList[id];
      const post = {
        ...existingPost,
        ...action.payload 
      }
      state.objList[id] = post
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.fulfilled, (state, action) => {
        const posts = action.payload.posts;
        const ids: Array<number> = [];
        const objList = posts.reduce((acc: PostState['objList'], post: PostModel) => {
          if (post) {
            acc[post.id] = post;
            ids.push(post.id);
          }
          return acc;
        }, {});
        state.objList = {
          ...state.objList,
          ...objList
        };
        state.ids = [...state.ids, ...ids];
        state.stage = 'succeed';
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.error = true;
        state.stage = 'failed';
      })
      .addCase(fetchPosts.pending, (state) => {
        state.stage = 'loading';
      });
  },
});

export const { editPost } = posts.actions;
const postsReducer = posts.reducer;
export default postsReducer;
