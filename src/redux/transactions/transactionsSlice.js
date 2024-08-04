import { createSlice } from '@reduxjs/toolkit';
import { fetchTransactions, createTransactions, updateTransactions, deleteTransactions } from './transactionsOperations';

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  // reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchTransactions.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchTransactions.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(createTransactions.pending, state => {
        state.isLoading = true;
      })
      .addCase(createTransactions.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(createTransactions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(deleteTransactions.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteTransactions.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(deleteTransactions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(item => item.id !== action.payload.id);
      })
      .addCase(updateTransactions.pending, state => {
        state.isLoading = true;
      })
      .addCase(updateTransactions.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(updateTransactions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.map((item)=> (item.id === action.payload.id) ? action.payload : item );
      });
  },
});

export const transactionsReducer = transactionsSlice.reducer;
