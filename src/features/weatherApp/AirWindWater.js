/** @format */

import React from "react"
import { useSelector, useDispatch } from "react-redux"
import Loader from "../../components/Loader"

const AirWindWater = () => {
  const currentData = useSelector(store => store.currentWeather.data)
  const isLoading = useSelector(store => store.currentWeather.isLoading)
  if (isLoading === true) {
    return <div></div>
  }
  return (
    <div className="airWindWaterWrapper">
      <div className="humidity">
        <div className="topText">Humidity</div>
        <div>{currentData.humidity}</div>
      </div>
      <div className="wind">
        <div className="topText">Wind</div>
        <div>{currentData.wind}</div>
      </div>
      <div className="clouds">
        <div className="topText">Clouds</div>
        <div>{currentData.clouds}</div>
      </div>
    </div>
  )
}

export default AirWindWater
