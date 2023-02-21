import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  greetings: {},
  status: "idle",
};

export const fetchGreeting = createAsyncThunk("fetch/greetings", async () => {
  try {
    const data = await fetch("http://localhost:3000/greeting/random");
    const res = await data.json();
    return res;
  } catch (error) {
    return error.messages;
  }
});

const MessageSlice = createSlice({
  name: "greeting",
  initialState,
  extraReducers: (Builder) => {
    Builder.addCase(fetchGreeting.pending, (state) => {
      state.status = "waiting";
    }).addCase(fetchGreeting.fulfilled, (state, { payload }) => {
      return {
        ...state,
        greetings: payload,
        status: "fulfilled",
      };
    });
  },
});

export const selectAllMsg = (state) => state.msg;

export default MessageSlice.reducer;
