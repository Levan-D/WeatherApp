import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  data: {},
  isLoading: true,
};

const locationSlice = createSlice({
  name: `location`,
  initialState: initialState,
  reducers: {
    getCoords: (state, action) => {
          state.data = action.payload;
          state.isLoading = false
    },
  },
});

export const { getCoords } = locationSlice.actions;
export default locationSlice.reducer;
