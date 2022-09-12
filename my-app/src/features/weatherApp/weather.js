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
      <WeatherSun />
      <WeatherPollution />

      {/* <WeatherDaily /> */}
    </div>
  )
}

export default Weather
