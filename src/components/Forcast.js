import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "./Forcast.css";
import "./responsive.css";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thusrday",
  "Friday",
  "Saturday",
  "Sunday",
];

function Forcast({ data }) {
  const daysInWeek = new Date().getDay();
  const forecastDay = WEEK_DAYS.slice(daysInWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, daysInWeek)
  );

  return (
    <div className="weather-container">
      <label className="title" htmlFor="">
        Daily
      </label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <div className="icon-day">
                    <img
                      className="icon"
                      src={`weather-ico/${item.weather[0].icon}.png`}
                      alt=""
                    />
                    <label htmlFor="" className="day">
                      {forecastDay[idx]}
                    </label>
                  </div>

                  <label htmlFor="" className="description">
                    {item.weather[0].description}
                  </label>
                  <label htmlFor="" className="min-max">
                    {Math.round(item.main.temp_min)}°C /{" "}
                    {Math.round(item.main.temp_max)}°C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              
              <div className="left">
                <div className="details-grid">
                  <div className="details-grid-item">
                    <label>Pressure:</label>
                    <label className="child-2">{item.main.pressure}</label>
                  </div>
                  <div className="details-grid-item">
                    <label>Humidity:</label>
                    <label className="child-2">{item.main.humidity}</label>
                  </div>
                  <div className="details-grid-item">
                    <label>Clouds:</label>
                    <label className="child-2">{item.clouds.all}%</label>
                  </div>
                </div>
              </div>

              <div className="right">
                <div className="details-grid">
                  <div className="details-grid-item">
                    <label>Wind speed:</label>
                    <label className="child-2">{item.wind.speed} m/s</label>
                  </div>
                  <div className="details-grid-item">
                    <label>Sea level:</label>
                    <label className="child-2">{item.main.sea_level}m</label>
                  </div>
                  <div className="details-grid-item">
                    <label>Feels like:</label>
                    <label className="child-2">{item.main.feels_like}°C</label>
                  </div>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default Forcast;
