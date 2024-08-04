import { createSlice } from '@reduxjs/toolkit';
import { fetchCategory, addCategory, deleteCategory, updateCategory } from './categoryOperation';

const categorySlice = createSlice({
  name: 'category',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  // reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCategory.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(fetchCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(addCategory.pending, state => {
        state.isLoading = true;
      })
      .addCase(addCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(addCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(deleteCategory.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(item => item.id !== action.payload.id);
      })
      .addCase(updateCategory.pending, state => {
        state.isLoading = true;
      })
      .addCase(updateCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(updateCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.map((item)=> (item.id === action.payload.id) ? action.payload : item );
      });
  },
});

export const categoryReducer = categorySlice.reducer;
