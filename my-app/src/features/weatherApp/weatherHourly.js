import React from "react";
import { useSelector, useDispatch } from "react-redux";
import drop from "../../images/drop.png";

const WeatherHourly = () => {
  const hourly = useSelector((store) => store.dailyWeather.data);

  return (
    <div className="hourlyCardContainer">
      {hourly.map((data) => (
        <div key={data.id} className="hourlyCard">
          <div className="time">{data.timeString.slice(11, 16)}</div>
          <div>
            <img src={data.icon} alt="weather icon" className="mainIcon" />
          </div>
          <div className="temp">{data.temp}</div>
          <div className="precipCont">
            <div className="dropIcon">
              <img src={drop} alt="rain drop icon" className="dropIcon" />
            </div>
            <div className="precipText"> &nbsp;{data.precip}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WeatherHourly;
