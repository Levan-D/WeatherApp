/** @format */

import React from "react"
import { useSelector, useDispatch } from "react-redux"
import Loader from "../../components/Loader"

const WeatherCardInfo = () => {
  const currentData = useSelector(store => store.currentWeather.data)
  const isLoading = useSelector(store => store.currentWeather.isLoading)
  if (isLoading === true) {
    return (
      <div className="weatherCardInfo">
        <Loader />
      </div>
    )
  }
  return (
    <div className="weatherCardInfo">
      <div className="location">
        <div className="city">{currentData.city},&nbsp;</div>
        <div className="country">{currentData.country}</div>
      </div>
      <div className="time">{currentData.date}</div>
      <div className="temp">&nbsp;&nbsp;{currentData.temp}</div>
      <div className="descr">{currentData.descr}</div>
    </div>
  )
}

export default WeatherCardInfo
