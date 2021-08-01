import React from 'react';
import { useWeather } from "../../context/WeatherContext";
import Weather from "./Weather";

const WeatherContainer = () => {
    const { weather, loading, handleCityNameUpdate, cities, cityName} = useWeather()
    const res = (weather.map((w, i) => {
        const idOption = `option${i}`
        let day = new Date(w.datetime).getDay()
        switch(day) {
            case 0:
                day = "Sun";
                break
            case 1:
                day = "Mon";
                break
            case 2:
                day = "Tue";
                break
            case 3:
                day = "Wed";
                break
            case 4:
                day = "Thu";
                break
            case 5:
                day = "Fri";
                break
            case 6:
                day = "Sat";
                break
            default:
                day = "";
        }
        const icons = {
            content: `url("https://www.weatherbit.io/static/img/icons/${w.weather.icon}.png")`
        }
        return <div key={i} id={idOption} className="singleWeather col-lg col-md col-sm">
            <div className="day">{day}</div>
            <div><span id="weatherIcon" style={icons}> </span></div>
            <div className="temp">
                {w.high_temp}&deg;  <span className="minTemp">{w.min_temp}&deg;</span>
            </div>
            <div className="description">
                {w.weather.description}
            </div>
        </div>
    }))
    return (
        <Weather loading={loading} cities={cities} cityName={cityName} handleCityNameUpdate={handleCityNameUpdate}
                 res={res} />
    );
}

export default WeatherContainer;