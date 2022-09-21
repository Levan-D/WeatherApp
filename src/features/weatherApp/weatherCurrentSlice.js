/** @format */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const getCurrentWeather = createAsyncThunk(
  "weatherCurrent/fetchWeatherCurrent",
  async coords => {
    try {
      if (Object.keys(coords).length !== 0) {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.long}&appid=760adfa684088d4ba2284ddc191d82d8`
        const response = await axios.get(url)
        return response.data
      }
    } catch (err) {
      console.log(err)
    }
  }
)

const initialState = {
  data: {},
  isLoading: true,
}

const weatherDailySlice = createSlice({
  name: "currentWeather",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [getCurrentWeather.pending]: state => {
      state.isLoading = true
    },
    [getCurrentWeather.fulfilled]: (state, action) => {
      if (action.payload !== undefined) {
        state.isLoading = false
        state.data = {
          city: action.payload.name,
          country: action.payload.sys.country,
          date: ` ${new Date(action.payload.dt * 1000).toDateString()} `,
          sunrise: ` ${new Date(
            action.payload.sys.sunrise * 1000
          ).getHours()} : ${new Date(action.payload.sys.sunrise * 1000).getMinutes()}`,
          sunset: ` ${new Date(action.payload.sys.sunset * 1000).getHours()} : ${new Date(
            action.payload.sys.sunset * 1000
          ).getMinutes()}`,
          temp: `${(action.payload.main.temp - 273.15).toFixed(0)}°`,
          descr: action.payload.weather[0].description,
          humidity: `${action.payload.main.humidity.toFixed(0)} %`,
          wind: `${(action.payload.wind.speed * 3.6).toFixed(1)} km/h`,
          clouds: `${action.payload.clouds.all.toFixed(0)} %`,
        }
      }
    },
    [getCurrentWeather.rejected]: state => {
      state.isloading = false
    },
  },
})

export default weatherDailySlice.reducer
