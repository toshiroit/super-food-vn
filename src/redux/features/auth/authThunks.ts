import { createAsyncThunk } from "@reduxjs/toolkit";
export const authLogin = createAsyncThunk(
  "auth/login",
  async (_, { rejectWithValue }) => {
    try {
    } catch (error) {}
  }
);
