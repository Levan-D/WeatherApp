/** @format */

import React from "react"
import { useSelector, useDispatch } from "react-redux"
import drop from "../../images/drop.png"

const WeatherDaily = () => {
  const weekdays = [
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
  ]

  const Daily = useSelector(store => store.dailyWeather.data)
  const isLoading = useSelector(store => store.currentWeather.isLoading)
  if (isLoading === true) {
    return <div></div>
  }

  let count = []
  let filteredData = Daily.map(day => day.timeString.slice(8, 10))
  Daily.map((obj, i) => {
    if (obj.timeString.slice(8, 10) == filteredData[i]) {
      count[filteredData[i]] = count[filteredData[i]]
        ? [...count[filteredData[i]], obj]
        : [obj]
    }
  })
  let sortedTemp = count.filter(a => a)
  for (let i = 0; i < sortedTemp.length; i++) {
    sortedTemp[i].sort((a, b) => (parseInt(a.temp) > parseInt(b.temp) ? 1 : -1))
  }

  let dailyRender = []

  for (let i = 0; i < sortedTemp.length; i++) {
    let weekdayIndex = new Date(sortedTemp[i][0].time * 1000).getDay()
    let precip =
      sortedTemp[i].map(data => parseInt(data.precip)).reduce((a, b) => a + b, 0) /
      sortedTemp[i].length

    dailyRender.push(
      <div key={sortedTemp[i][0].id} className="dailyWeather">
        <div className="weekday">{i === 0 ? `Today` : weekdays[weekdayIndex]} </div>
        <div className="dailyPrecip">
          <img src={drop} alt="rain drop icon" className="dropIcon" />
          <div> {precip.toFixed()} %</div>
        </div>
        <div className="dailytemp">
          {sortedTemp[i].length > 1
            ? `${sortedTemp[i][0].temp} ${sortedTemp[i][sortedTemp[i].length - 1].temp}`
            : sortedTemp[i][0].temp}{" "}
        </div>
      </div>
    )
  }

  return <div className="DailyCardContainer">{dailyRender}</div>
}

export default WeatherDaily
