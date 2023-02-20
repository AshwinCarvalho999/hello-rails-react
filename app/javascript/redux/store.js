import { configureStore } from '@reduxjs/toolkit';
import messageSlice from './messages/messageSlice';

const store = configureStore({
  reducer: {
    messageData: messageSlice,
  },
});

export default store;
