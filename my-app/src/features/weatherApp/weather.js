import React, { useEffect } from "react";
import WeatherCard from "./WeatherCard";
import { useSelector, useDispatch } from "react-redux";
import { getCurrentWeather } from "./weatherCurrentSlice";
import { getDailyWeather } from "./weatherDailySlice";
const Weather = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentWeather());
    dispatch(getDailyWeather());
  }, []);

  return (
    <div className="weatherApp">
      <WeatherCard />
    </div>
  );
};

export default Weather;
