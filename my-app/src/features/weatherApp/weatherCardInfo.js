import React from "react";
import { useSelector, useDispatch } from "react-redux";
import sunrise from "../../images/rise.png";
import sunset from "../../images/set.png";
import Loader from "../../components/Loader";

const WeatherCardInfo = () => {
  const currentData = useSelector((store) => store.currentWeather.data);
  const isLoading = useSelector((store) => store.currentWeather.isLoading);
  if (isLoading === true) {
    return (
      <div className="weatherCardInfo">
        <Loader />
      </div>
    );
  }
  return (
    <div className="weatherCardInfo">
      <div className="location">
        <div className="city">{currentData.city},&nbsp;</div>
        <div className="country">{currentData.country}</div>
      </div>
      <div className="time">{currentData.date}</div>
      <div className="sunPosition">
        <div className="sunrise">
          <div>
            <img src={sunrise} alt="sunrise image" />
          </div>
          <div className="sunText">{currentData.sunrise}</div>
        </div>
        <div className="sunset">
          <div>
            <img src={sunset} alt="sunset image" />
          </div>
          <div className="sunText">{currentData.sunset}</div>
        </div>
      </div>
      <div className="temp">&nbsp;&nbsp;{currentData.temp}</div>
      <div className="descr">{currentData.descr}</div>
      <hr />
      <div className="info">
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
    </div>
  );
};

export default WeatherCardInfo;
