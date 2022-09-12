/** @format */

import React from "react"
import { useSelector, useDispatch } from "react-redux"
import drop from "../../images/drop.png"

const WeatherDaily = () => {
  const Daily = useSelector(store => store.dailyWeather.data)
  const isLoading = useSelector(store => store.currentWeather.isLoading)
  if (isLoading === true) {
    return <div></div>
  }

  let sortedPrecip = {}
  let count = {}
  let filteredData = Daily.map(day => day.timeString.slice(8, 10))
  Daily.map((obj, i) => {
    if (obj.timeString.slice(8, 10) == filteredData[i]) {
      count[filteredData[i]] = count[filteredData[i]]
        ? [...count[filteredData[i]], obj]
        : [obj]
    }
  })
  let keys = Object.keys(count)

  // for (let i = 0; i < keys.length; i++) {
  //   sortedTemp[keys[i]] = count[keys[i]].sort((a, b) =>
  //     parseInt(a.temp) > parseInt(b.temp) ? 1 : -1
  //   )
  // }
  // console.log(sortedData)

  return <div className="hourlyCardContainer">aaaa</div>
}

export default WeatherDaily
