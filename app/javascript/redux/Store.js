import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "./reducers/messageSlice";

const Store = configureStore({
  name: "messages",
  reducer: {
    msg: messageReducer,
  },
});

export default Store;
