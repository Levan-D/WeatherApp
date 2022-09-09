import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const url = `https://api.openweathermap.org/data/2.5/weather?lat=41.7151&lon=44.8271&appid=760adfa684088d4ba2284ddc191d82d8`;
export const getCurrentWeather = createAsyncThunk("getCurrentWeather", () => {
  return fetch(url)
    .then((resp) => resp.json())
    .catch((error) => console.log(error));
});

const initialState = {
  data: {},
  isLoading: true,
};

const weatherDailySlice = createSlice({
  name: "currentWeather",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [getCurrentWeather.pending]: (state) => {
      state.isLoading = true;
    },
    [getCurrentWeather.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data = {
        city: action.payload.name,
        country: action.payload.sys.country,
        date: ` ${new Date(action.payload.dt * 1000).toDateString()} `,
        sunrise: ` ${new Date(
          action.payload.sys.sunrise * 1000
        ).getHours()} : ${new Date(
          action.payload.sys.sunrise * 1000
        ).getMinutes()}`,
        sunset: ` ${new Date(
          action.payload.sys.sunset * 1000
        ).getHours()} : ${new Date(
          action.payload.sys.sunset * 1000
        ).getMinutes()}`,
        temp: `${(action.payload.main.temp - 273.15).toFixed(0)}°c`,
        descr: action.payload.weather[0].description,
        humidity: `${action.payload.main.humidity} %`,
        wind: `${(action.payload.wind.speed * 3.6).toFixed(1)} km/h`,
        clouds: `${action.payload.clouds.all} %`,
      };
    },
    [getCurrentWeather.rejected]: (state) => {
      state.isloading = false;
    },
  },
});

export default weatherDailySlice.reducer;
