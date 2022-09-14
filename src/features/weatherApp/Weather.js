/** @format */

import React, { useEffect } from "react";
import WeatherCard from "./WeatherCard";
import { useSelector, useDispatch } from "react-redux";
import { getCurrentWeather } from "./weatherCurrentSlice";
import { getDailyWeather } from "./weatherDailySlice";
import { getWeatherPollution } from "./weatherPollutionSlice";
import { getCoords } from "./locationSlice";
import WeatherHourly from "./WeatherHourly";
import WeatherDaily from "./WeatherDaily";
import WeatherSun from "./WeatherSun";
import WeatherPollution from "./WeatherPollution";
import AirWindWater from "./AirWindWater";

const Weather = () => {
  const dispatch = useDispatch();
  const isLoadingCoords = useSelector((store) => store.locationSlice.isLoading);
  const coords = useSelector((store) => store.locationSlice.data);
  useEffect(() => {
    if (isLoadingCoords) {
      const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      };
      function success(pos) {
        dispatch(
          getCoords({ lat: pos.coords.latitude, long: pos.coords.longitude })
        );
      }
      function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      }
      navigator.geolocation.getCurrentPosition(success, error, options);
    }
  }, []);
  useEffect(() => {
    dispatch(getCurrentWeather(coords));
    dispatch(getDailyWeather(coords));
    dispatch(getWeatherPollution(coords));
  }, [!isLoadingCoords]);

  return (
    <div className="weatherApp">
      <WeatherCard />
      <WeatherHourly />
      <WeatherDaily />
      <AirWindWater />
      <WeatherSun />
      <WeatherPollution />
    </div>
  );
};

export default Weather;
