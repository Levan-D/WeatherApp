/** @format */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const url = `http://api.openweathermap.org/data/2.5/air_pollution?lat=41.7151&lon=44.8271&appid=760adfa684088d4ba2284ddc191d82d8`

export const getWeatherPollution = createAsyncThunk("getWeatherPollution", () => {
  return fetch(url)
    .then(resp => resp.json())
    .catch(error => console.log(error))
})

const initialState = {
  data: [],
  isLoading: true,
}

const weatherPollutionSlice = createSlice({
  name: "weatherPollution",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [getWeatherPollution.pending]: state => {
      state.isLoading = true
    },
    [getWeatherPollution.fulfilled]: (state, action) => {
      state.isLoading = false
      state.data = action.payload.list[0].main.aqi
    },
    [getWeatherPollution.rejected]: state => {
      state.isloading = false
    },
  },
})

export default weatherPollutionSlice.reducer
