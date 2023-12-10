import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT } from "./config";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages.splice(OFFSET_LIVE_CHAT,1);
      state.messages.push(action.payload); //unshift -> pushes elements from the front(the last element will be placed at the first position) whereas push pushes elements from the back(last element will be at the last position).
    },
  },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
