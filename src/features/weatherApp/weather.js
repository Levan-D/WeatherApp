/** @format */

import React, { useEffect } from "react"
import WeatherCard from "./WeatherCard"
import { useSelector, useDispatch } from "react-redux"
import { getCurrentWeather } from "./weatherCurrentSlice"
import { getDailyWeather } from "./weatherDailySlice"
import { getWeatherPollution } from "./weatherPollutionSlice"
import WeatherHourly from "./WeatherHourly"
import WeatherDaily from "./WeatherDaily"
import WeatherSun from "./WeatherSun"
import WeatherPollution from "./WeatherPollution"
import AirWindWater from "./AirWindWater"

const Weather = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCurrentWeather())
    dispatch(getDailyWeather())
    dispatch(getWeatherPollution())
  }, [])

  return (
    <div className="weatherApp">
      <WeatherCard />
      <WeatherHourly />
      <WeatherDaily />
      <AirWindWater />
      <WeatherSun />
      <WeatherPollution />
    </div>
  )
}

export default Weather
