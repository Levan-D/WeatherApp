/** @format */

import { configureStore } from "@reduxjs/toolkit";
import CurrentWeatherReducer from "../features/weatherApp/weatherCurrentSlice";
import DailyWeatherReducer from "../features/weatherApp/weatherDailySlice";
import WeatherPollutionSlice from "../features/weatherApp/weatherPollutionSlice";
import LocationSlice from "../features/weatherApp/locationSlice";

export const store = configureStore({
  reducer: {
    currentWeather: CurrentWeatherReducer,
    dailyWeather: DailyWeatherReducer,
    weatherPollution: WeatherPollutionSlice,
    locationSlice: LocationSlice,
  },
});
