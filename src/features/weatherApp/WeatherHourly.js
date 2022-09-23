/** @format */

import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import drop from "../../images/drop.png";

const WeatherHourly = () => {
  const refOne = useRef(null);
  const [Scroll, setScroll] = useState({
    isDown: false,
    startX: 0,
    scrollLeft: 0,
  });

  const hourly = useSelector((store) => store.dailyWeather.data);

  const isLoading = useSelector((store) => store.currentWeather.isLoading);
  if (isLoading === true) {
    return <div></div>;
  }
  const hourlyCard = hourly.map((data) => {
    if (
      hourly[0].timeString.slice(8, 10) === data.timeString.slice(8, 10) ||
      1 + Number(hourly[0].timeString.slice(8, 10)) ==
        data.timeString.slice(8, 10)
    ) {
      return (
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
      );
    }
  });
  return (
    <div className="hourlyCardGradient">
      <div
        className="hourlyCardContainer"
        ref={refOne}
        onMouseDown={(e) => {
          setScroll({
            ...Scroll,
            isDown: true,
          });
        }}
        onMouseOver={(e) => {
          setScroll({
            isDown: false,
            startX: e.pageX + refOne.current.offsetLeft,
            scrollLeft: refOne.current.offsetLeft,
          });
        }}
        onMouseLeave={(e) => {
          setScroll({
            ...Scroll,
            isDown: false,
          });
        }}
        onMouseUp={(e) => {
          setScroll({
            ...Scroll,
            isDown: false,
          });
        }}
        onMouseMove={(e) => {
          if (!Scroll.isDown) return;
          e.preventDefault();
          const x = e.pageX - refOne.current.offsetLeft;
          refOne.current.scrollLeft = refOne.current.offsetLeft - x;
        }}
      >
        {hourlyCard}
      </div>
    </div>
  );
};

export default WeatherHourly;
