import { createSlice } from '@reduxjs/toolkit';
import { infoUser, currentUser, updateAvatar, removeAvatar } from './userOperations';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    info: [],
    isLoading: false,
    error: null,
  },
  // reducers: {},
  extraReducers: builder => {
    builder
      .addCase(currentUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(currentUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(currentUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.user = action.payload;
      })
      .addCase(infoUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(infoUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(infoUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.user.push(action.payload);
      })
      .addCase(removeAvatar.pending, state => {
        state.isLoading = true;
      })
      .addCase(removeAvatar.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(removeAvatar.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.user.avatarUrl = action.payload.avatarUrl;
      })
      .addCase(updateAvatar.pending, state => {
        state.isLoading = true;
      })
      .addCase(updateAvatar.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(updateAvatar.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.user.avatarUrl = action.payload.avatarUrl;
      });
  },
});

export const userReducer = userSlice.reducer;
