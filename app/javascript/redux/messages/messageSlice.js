import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import fetchMessage from '../service/api';

const FETCH_MESSAGE = createAction('messages/fetch_message');

const initialState = {
  loading: false,
  message: {},
  error: '',
};

export const getMessage = createAsyncThunk(FETCH_MESSAGE, async () => {
  const message = await fetchMessage();
  return message;
});

const messageSlice = createSlice({
  name: 'messageData',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getMessage.pending, (state) => {
        state.loading = true;
      })
      .addCase(getMessage.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload;
      })
      .addCase(getMessage.rejected, (state, action) => {
        state.loading = false;
        state.message = {};
        state.error = action.error.message;
      });
  },
});

export default messageSlice.reducer;
