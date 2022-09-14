/** @format */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getDailyWeather = createAsyncThunk("getDailyWeather", (coords) => {
  if (Object.keys(coords).length !== 0) {
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${coords.lat}&lon=${coords.long}&appid=760adfa684088d4ba2284ddc191d82d8`;
    return fetch(url)
      .then((resp) => resp.json())
      .catch((error) => console.log(error));
  }
});

const initialState = {
  data: [],
  isLoading: true,
};

const weatherDailySlice = createSlice({
  name: "dailyWeather",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [getDailyWeather.pending]: (state) => {
      state.isLoading = true;
    },
    [getDailyWeather.fulfilled]: (state, action) => {
      if (action.payload !== undefined) {
        state.isLoading = false;
        state.data = action.payload.list.map((list) => ({
          id: list.dt,
          time: list.dt,
          timeString: list.dt_txt,
          precip: `${(list.pop * 100).toFixed(0)}%`,
          temp: `${(list.main.temp - 273.15).toFixed(0)}°`,
          icon: `http://openweathermap.org/img/wn/${list.weather[0].icon}@2x.png`,
        }));
      }
    },
    [getDailyWeather.rejected]: (state) => {
      state.isloading = false;
    },
  },
});

export default weatherDailySlice.reducer;
