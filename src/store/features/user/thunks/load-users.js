import { createAsyncThunk } from "@reduxjs/toolkit";

export const loadUsersIfNotExist = createAsyncThunk(
  "user/loadUsersIfNotExist",
  async () => {
    const response = await fetch("http://localhost:3001/api/users/");
    return await response.json();
  },
);
