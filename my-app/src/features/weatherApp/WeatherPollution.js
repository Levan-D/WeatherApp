/** @format */

import React from "react"
import { useSelector, useDispatch } from "react-redux"

const WeatherPollution = () => {
  const pollutionIndex = useSelector(store => store.weatherPollution.data)

  return <div>{pollutionIndex}</div>
}

export default WeatherPollution
