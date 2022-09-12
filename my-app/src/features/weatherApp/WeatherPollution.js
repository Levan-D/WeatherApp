/** @format */

import React from "react"
import { useSelector, useDispatch } from "react-redux"
import gauge from "../../images/gauge.png"

const WeatherPollution = () => {
  const pollutionIndex = useSelector(store => store.weatherPollution.data)
  const isLoading = useSelector(store => store.currentWeather.isLoading)
  if (isLoading === true) {
    return <div></div>
  }
  function addDescription(index) {
    switch (index) {
      case (index = 5):
        return `Very Poor`
      case (index = 4):
        return `Poor`
      case (index = 3):
        return `Moderate`
      case (index = 2):
        return `Fair`
      case (index = 1):
        return `Good`
      default:
        return "IDK"
    }
  }

  return (
    <div className="pollutionWrapper">
      <img src={gauge} alt="pollution gauge" className="gaugeImage" />
      <div className="pollutionIndexW">
        <div className="pollutionIndex">Air Quality Index:</div>
        <div className="pollutionIndex">
          {addDescription(pollutionIndex)} ({`${6 - pollutionIndex}`}/5)
        </div>
      </div>
    </div>
  )
}

export default WeatherPollution
