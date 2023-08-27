import { createSlice } from "@reduxjs/toolkit";
import { CART_ACTION } from "./action";

const DEFAULT_STATE = {};

// export const cartSlice = createSlice({
//   name: "cart",
//   inititalState: DEFAULT_STATE,
//   reducers: {
//     increment: (state, {payload} = {}) => {
//       state = {[action.payload]: (state[action.payload] || 0) + 1};
//       },
//     increment: (state, {payload} = {}) => {
//       state = {[action.payload]: (state[action.payload] || 0) + 1};
//       },
//   },
// });


export const cartReducer = (state = DEFAULT_STATE, action) => {
  switch (action?.type) {
    case CART_ACTION.increment:
      return {
        ...state,
        [action.payload]: (state[action.payload] || 0) + 1,
      };
    case CART_ACTION.decrement:
      return {
        ...state,
        [action.payload]:
          (state[action.payload] || 0) > 0 ? state[action.payload] - 1 : 0,
      };

    default:
      return state;
  }
};
