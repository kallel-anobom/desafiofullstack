import { createSlice } from '@reduxjs/toolkit';

export const loadingSlice = createSlice({
  name: 'loading',
  initialState: {
    value: false,
  },
  reducers: {
    startLoading: state => {
      state.value = true;
    },
    stopLoading: state => {
      state.value = false;
    }
  },
});

export const { stopLoading, startLoading} = loadingSlice.actions;

export const selectLoading = state => state.loading.value;

export default loadingSlice.reducer;
