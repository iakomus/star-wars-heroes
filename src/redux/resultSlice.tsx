/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { APIResponse } from 'src/interfaces/Response';

export interface ResultState {
  loading: boolean;
  error: Error | null;
  data: APIResponse | undefined;
}

export const initialState: ResultState = {
  loading: false,
  error: null,
  data: undefined,
};

export const resultSlice = createSlice({
  name: 'result',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setLoading, setError, setData } = resultSlice.actions;

export default resultSlice.reducer;
