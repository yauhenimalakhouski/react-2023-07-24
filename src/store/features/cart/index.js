import { createSlice } from "@reduxjs/toolkit";

const DEFAULT_STATE = {};

export const cartSlice = createSlice({
  name: "cart",
  initialState: DEFAULT_STATE,
  reducers: {
    increment: (state, {payload} = {}) => {
      state[payload] =  (state[payload] || 0) + 1;
      },
    decrement: (state, {payload} = {}) => {
      state[payload] = (state[payload] || 0) > 0 ? state[payload] - 1 : 0;
      },
  },
});
