import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

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
    'user/current',
    async(_,thunkAPI) =>{
        try{
            console.log('data');
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
    'user/info',
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
    'user/updateAvatar',
    async(avatarData,thunkAPI) =>{
        try{
            const formData = new FormData();
            formData.append('avatar', avatarData);
            const data = await axios.patch('users/avatar',formData);
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
    'user/removeAvatar',
    async(avatarUrl,thunkAPI) =>{
        try{
            const avatarId = getLastParamWithoutExtension(avatarUrl);
            console.log(avatarId);
            const data = await axios.delete(`users/avatar/${avatarId}`);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)