/** @format */
import { useSelector, useDispatch } from "react-redux"
import sunrise from "../../images/rise.png"
import sunset from "../../images/set.png"
import UV from "../../images/UV.png"

import React from "react"

const WeatherSun = () => {
  const currentData = useSelector(store => store.currentWeather.data)

  const isLoading = useSelector(store => store.currentWeather.isLoading)
  if (isLoading === true) {
    return <div></div>
  }

  return (
    <div className="sunPositionWrapper">
      <div className="sunrise">
        <div className="sunText">Sunrise</div>
        <div>
          <img src={sunrise} alt="sunrise image" />
        </div>
        <div className="sunTimes">{currentData.sunrise}</div>
      </div>
      <div className="sunset">
        <div className="sunText">Sunset</div>
        <div>
          <img src={sunset} alt="sunset image" />
        </div>
        <div className="sunTimes">{currentData.sunset}</div>
      </div>
      <div className="UVindex">
        <div className="sunText">UV Index</div>
        <div>
          <img src={UV} alt="UV image" className="UVImage" />
        </div>
        <div className="sunTimes">IDK</div>
      </div>
    </div>
  )
}

export default WeatherSun
