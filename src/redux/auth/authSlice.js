import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser, currentUser, infoUser, removeAvatar, updateAvatar } from './authOperations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null, avatarUrl: null },
    token: null,
    refreshToken: null,
    sid: null,
    isLoggedIn: false,
    isRefreshing: false,
    isLoading: false,
  },
  extraReducers: builder => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        const {name, email, avatarUrl } = action.payload.user;
        state.user = { 
          name:name, 
          email:email,
          avatarUrl:avatarUrl 
        }
        state.token = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.sid = action.payload.sid
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(register.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(logIn.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        const {name, email, avatarUrl } = action.payload.user;
        state.user = { 
          name:name, 
          email:email, 
          avatarUrl:avatarUrl 
        }
        state.token = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.sid = action.payload.sid
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(logIn.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null, avatarUrl:null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        const {name, email, avatarUrl } = action.payload.user;
        state.user = { 
          name:name, 
          email:email, 
          avatarUrl:avatarUrl 
        }
        state.token = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.sid = action.payload.sid; 
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      })
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

export const authReducer = authSlice.reducer;
