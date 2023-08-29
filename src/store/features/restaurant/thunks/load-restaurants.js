import { createAsyncThunk } from "@reduxjs/toolkit";


export const loadRestaurantsIfNotExist = createAsyncThunk(
  "restaurant/loadRestaurantsIfNotExist",
  async () => {
    console.log("1");
    const response = await fetch('http://localhost:3001/api/restaurants/');
    return await response.json();
  },
  {
    condition: (getState) => {
      const state = getState;
      return !state;
    }
  }
);

