import React from "react";
import "./Forecast.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

function Forecasts({ forecastData }) {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const today = new Date().getDay();

  let upcomingDays = [];
  for (let i = 0; i < 5; i++) {
    // Calculate the index of the day
    let dayIndex = (today + i) % 7;
    // Push the name of the day to the array
    upcomingDays.push(daysOfWeek[dayIndex]);
  }

   console.log(forecastData);

  return (
    <>
      <label className="title">Daily</label>

      <Accordion allowZeroExpanded>
        {forecastData.list
          .filter((_, index) => index % 8 === 0 && index / 8 < 5)
          .map((item, idx) => (
            <AccordionItem key={idx}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="daily-item">
                    <img
                      className="icon-small"
                      src={`icons/${item.weather[0].icon}.png`}
                      alt="ewa"
                    />
                    <label className="day">{upcomingDays[idx]}</label>
                    <label className="description">
                      {item.weather[0].description}
                    </label>

                    <label className="min-max">
                      {Math.round(item.main.temp_min)}&deg;C/
                      {Math.round(item.main.temp_max)}&deg;C
                    </label>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="daily-details-grid">
                  <div className="daily-details-grid-item">
                    <label>Pressure:</label>
                    <label>{item.main.pressure}hPa</label>
                  </div>

                  <div className="daily-details-grid-item">
                    <label>Humidity:</label>
                    <label>{item.main.humidity}%</label>
                  </div>


                  <div className="daily-details-grid-item">
                    <label>Cloud:</label>
                    <label>{item.clouds.all}%</label>
                  </div>

                  <div className="daily-details-grid-item">
                    <label>Wind Speed:</label>
                    <label>{item.wind.speed}m/s</label>
                  </div>

                  
                  
                  <div className="daily-details-grid-item">
                    <label>Feels Like:</label>
                    <label>{ Math.round(item.main.feels_like)}&deg;C</label>
                  </div>


                  <div className="daily-details-grid-item">
                    <label>Sea Level:</label>
                    <label>{ Math.round(item.main.sea_level)}</label>
                  </div>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          ))}
      </Accordion>
    </>
  );
}

export default Forecasts;
