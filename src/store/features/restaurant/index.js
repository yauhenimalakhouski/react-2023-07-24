import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { loadRestaurantsIfNotExist } from "./thunks/load-restaurants";

const restaurantEntityAdapter = createEntityAdapter();

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState: restaurantEntityAdapter.getInitialState(),
  // reducers: {
  //   addRestaurantReview: (state, {payload} = {}) => {
  //     state.entities =  {
  //       ...state.entities,
  //       [payload.restaurantId]: {
  //         ...state.entities[payload.restaurantId],
  //         reviews: [
  //           ...state.entities[payload.restaurantId].reviews,
  //           payload.reviewId,
  //         ],
  //       },
  //     }  
  // }},
  extraReducers: (builder) => builder.addCase(
    loadRestaurantsIfNotExist.fulfilled,
    (state, {payload}={}) => {
      restaurantEntityAdapter.setMany(state, payload);
    }
  )
});
