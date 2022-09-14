/** @format */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getWeatherPollution = createAsyncThunk(
  "getWeatherPollution",
  (coords) => {
    if (Object.keys(coords).length !== 0) {
      const url = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${coords.lat}&lon=${coords.long}&appid=760adfa684088d4ba2284ddc191d82d8`;
      return fetch(url)
        .then((resp) => resp.json())
        .catch((error) => console.log(error));
    }
  }
);

const initialState = {
  data: [],
  isLoading: true,
};

const weatherPollutionSlice = createSlice({
  name: "weatherPollution",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [getWeatherPollution.pending]: (state) => {
      state.isLoading = true;
    },
    [getWeatherPollution.fulfilled]: (state, action) => {
      if (action.payload !== undefined) {
        state.isLoading = false;
        state.data = action.payload.list[0].main.aqi;
      }
    },
    [getWeatherPollution.rejected]: (state) => {
      state.isloading = false;
    },
  },
});

export default weatherPollutionSlice.reducer;
