import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";





export const fetchTransactions = createAsyncThunk(
    'transactions/all',
    async(type,thunkAPI) =>{
        try{
            const { data } = await axios.get(`transactions/${type}`);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const createTransactions = createAsyncThunk(
    'transactions/create',
    async(formData,thunkAPI) => {
        try {
            const { data } = await axios.post('/transactions',formData);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export  const updateTransactions = createAsyncThunk(
    'transactions/update',
    async(formData,thunkAPI) => {
        try {
            const { 
                type,
                id,
                date,
                time,
                category,
                sum,
                comment,
            } = formData;
            const { data } = await axios.patch(`transactions/${type}/${id}`,
            {
                date:date,
                time:time,
                category:category,
                sum:sum,
                comment:comment
            });
            return data;

        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const deleteTransactions = createAsyncThunk(
    'transactions/delete',
    async({id,type},thunkAPI) => {
        try {
            const { data } = await axios.delete(`transactions${type}`,{id:id})
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)