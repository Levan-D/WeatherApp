import React, { useEffect } from "react";
import WeatherCard from "./WeatherCard";
import { useSelector, useDispatch } from "react-redux";
import { getCurrentWeather } from "./weatherCurrentSlice";
import { getDailyWeather } from "./weatherDailySlice";
import WeatherHourly from "./WeatherHourly";
const Weather = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentWeather());
    dispatch(getDailyWeather());
  }, []);

  return (
    <div className="weatherApp">
      <WeatherCard />
      <WeatherHourly />
    </div>
  );
};

export default Weather;
