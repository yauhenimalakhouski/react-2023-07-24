import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { loadRestaurantsIfNotExist } from "./thunks/load-restaurants";

const restaurantEntityAdapter = createEntityAdapter();

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState: restaurantEntityAdapter.getInitialState(),

  extraReducers: (builder) => builder.addCase(
    loadRestaurantsIfNotExist.fulfilled,
    (state, {payload}={}) => {
      restaurantEntityAdapter.setMany(state, payload);
    }
  )
  // .addCase(
  //   addRestaurantReview.fulfilled,
  //   (state, {payload}={}) => {
  //     restaurantEntityAdapter.addOne(state, payload);
  //   }
  // )
});
