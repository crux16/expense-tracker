import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from '../filter/filterSelector';

export const selectCategory = state => state.category.items;
export const selectError = state => state.category.error;
export const selectIsLoading = state => state.category.isLoading;

export const selectFilteredCategory = createSelector(
  // array of input selectors
  [selectCategory, selectFilter],
  // transducer function
  (category, filter) => {
    return category.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
