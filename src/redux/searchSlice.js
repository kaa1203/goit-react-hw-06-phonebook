import { createSlice } from "@reduxjs/toolkit";

const searchInitialState = '';

const searchSlice = createSlice({
   name: 'search',
   initialState: searchInitialState,
   reducers: {
      searchValue(state, action) {
         return state = action.payload;
      }
   }
});

export const { searchValue } = searchSlice.actions;
export const searchReducer = searchSlice.reducer;