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

    // if (persistedToken === null) {
    //   // If there is no token, exit without performing any request
    //   return thunkAPI.rejectWithValue('Unable to fetch user');
    // }

    try {
      // If there is a token, add it to the HTTP header and perform the request
      setAuthHeader(data.accessToken);
      const res = await axios.get('/users/current',_,{headers:{Authorization:`Bearer ${data.accessToken}`}});
      return {
        user:res.data,
        ...data
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
    }catch(error) {
      // If there is no token, exit without performing any request
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
  }
);


export const getLastParamWithoutExtension = (url) => {
  // Remove query parameters if present
  const path = url.split('?')[0];

  // Split the URL by slashes
  const parts = path.split('/');

  // Get the last part of the URL
  const lastPart = parts.pop() || parts.pop(); // handle trailing slash

  // Remove the file extension if any
  const lastPartWithoutExtension = lastPart.split('.').slice(0, -1).join('.');

  return lastPartWithoutExtension;
}

/* 
// get current user
// 
*/

export const currentUser = createAsyncThunk(
  'auth/current',
  async(_,thunkAPI) =>{
      try{
          const { data } = await axios.get('users/current');
          console.log(data);
          return data;
      } catch (error) {
          return thunkAPI.rejectWithValue(error.message);
      }
  }
)

/* 
* PATCH info user
* specific name and currency
*/

export const infoUser = createAsyncThunk(
  'auth/info',
  async({name,currency},thunkAPI) => {
      try{
          const data = await axios.patch('users/info',{name,currency});
          return data;
      } catch (error) {
          return thunkAPI.rejectWithValue(error.message);
      }
  }
)

/**  
* PATCH avatar URL
* Uploading avatar by creating url linked
**/

export const updateAvatar = createAsyncThunk(
  'auth/updateAvatar',
  async(avatarData,thunkAPI) =>{
      try{
          const formData = new FormData();
          formData.append('avatar', avatarData);
          const {data} = await axios.patch('users/avatar',formData);
          return data;
      } catch (error) {
          return thunkAPI.rejectWithValue(error.message);
      }
  }
)

/**
* REMOVE avatar URL
* removing avatar from data string
**/

export const removeAvatar = createAsyncThunk(
  'auth/removeAvatar',
  async(avatarUrl,thunkAPI) =>{
      try{
          const avatarId = getLastParamWithoutExtension(avatarUrl);
          const { data }  = await axios.delete(`users/avatar/${avatarId}`);
          return data;
      } catch (error) {
          return thunkAPI.rejectWithValue(error.message);
      }
  }
)