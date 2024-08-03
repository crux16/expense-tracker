import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

/*
 * GET @ /category
 */
export const fetchCategory = createAsyncThunk(
  'category/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/categories');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * POST @ /categories
 * body: { type, categoryName }
 */
export const addCategory = createAsyncThunk(
  'category/add',
  async ({ type, categoryName }, thunkAPI) => {
    try {
      const response = await axios.post('/categories', { type, categoryName });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * DELETE @ /contacts/:id
 */
export const deleteCategory = createAsyncThunk(
  'category/delete',
  async (categoryId, thunkAPI) => {
    try {
      const response = await axios.delete(`/categories/${categoryId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * UPDATE @ /contacts/:id
 */
export const updateCategory = createAsyncThunk(
  'category/update',
  async (categoryId, thunkAPI) => {
    try {
      const response = await axios.patch(`/categories/${categoryId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);