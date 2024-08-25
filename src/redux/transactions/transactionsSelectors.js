import { createSelector } from "@reduxjs/toolkit";

import { selectFilter } from "redux/filter/filterSelector";

export const selectTransactions = state => state.transactions.items;
export const selectError = state => state.transactions.error;
export const selectIsLoading = state => state.transactions.isLoading;

export const selectFilteredTransactions = createSelector(
    [selectTransactions,selectFilter],
    (transactions, filter) =>{
        return transactions.filter(({name})=>name
        .toLowerCase()
        .includes(filter.toLowerCase()))
    }
)