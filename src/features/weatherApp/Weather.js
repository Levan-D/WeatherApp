/** @format */

import React, { useEffect, useState } from "react";
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
import locatonIcon from "../../images/location.png";
import yIcon from "../../images/y.png";
import nIcon from "../../images/n.png";

const Weather = () => {
  const dispatch = useDispatch();
  const isLoadingCoords = useSelector((store) => store.locationSlice.isLoading);
  const coords = useSelector((store) => store.locationSlice.data);
  const [access, setAccess] = useState(null);

  useEffect(() => {
    if (isLoadingCoords) {
      const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      };
      function success(pos) {
        setAccess(true);
        dispatch(
          getCoords({ lat: pos.coords.latitude, long: pos.coords.longitude })
        );
      }
      function error(err) {
        setAccess(false);
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
      <div className="locationIndicat">
        <img src={locatonIcon} alt="location icon" />
        &nbsp; : &nbsp;
        <img src={access ? yIcon : nIcon} alt="granded or declined icon" />
      </div>
      {!access && (
        <div className="errorMsg">Please, enable location persmissions to use this app</div>
      )}
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
