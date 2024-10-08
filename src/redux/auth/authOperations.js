import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://expense-tracker.b.goit.study/api';

// Utility to add JWT
const setAuthHeader = (token) => {
   axios.defaults.headers.Authorization = `Bearer ${token}`;
};


// Utility to remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.Authorization = '';
};

/*
 * POST @ /users/signup
 * body: { name, email, password }
 */
export const register = createAsyncThunk(
  'auth/register',
  async (data, thunkAPI) => {
    try {
      const res = await axios.post('/auth/register', data);
      // After successful registration, add the token to the HTTP header
      setAuthHeader(res.data.accessToken);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * POST @ /users/login
 * body: { email, password }
 */
export const logIn = createAsyncThunk(
  'auth/login',
  async (data, thunkAPI) => {
    try {
      const res= await axios.post('/auth/login', data);
      // After successful login, add the token to the HTTP header
      setAuthHeader(res.data.accessToken);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 */
export const logOut = createAsyncThunk('/auth/logout', async (_, thunkAPI) => {
  try {
    await axios.get('/auth/logout');
    // After a successful logout, remove the token from the HTTP header
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

/*
 * GET @ /users/current
 * headers: Authorization: Bearer token
 */
export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    try{
    // Reading the token from the state via getState()
    const state = thunkAPI.getState();
    const { refreshToken, sid} = state.auth;
    // const persistedToken = state.auth.token;
    // setAuthHeader(refreshToken);
    const { data } = await axios.post('/auth/refresh',{sid:sid},{headers:{Authorization:`Bearer ${refreshToken}`}});
      setAuthHeader(data.accessToken);
    // if (persistedToken === null) {
    //   // If there is no token, exit without performing any request
    //   return thunkAPI.rejectWithValue('Unable to fetch user');
    // }
      return data;
    }catch(error) {
      // If there is no token, exit without performing any request
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
  }
);

