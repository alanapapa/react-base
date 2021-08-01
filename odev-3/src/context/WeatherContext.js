import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { cities } from "../store/Cities"

const initialWeather = [{
    datetime: '',
    high_temp: '',
    weather: {
        icon: ''
    },
    min_temp: ''
}];

const WeatherContext = createContext(initialWeather)


export const WeatherProvider = ({children}) => {
    const [cityName, setCityName] = useState(localStorage.getItem('cityName') || "Antalya")
    const [weather, setWeather] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        setWeather(initialWeather)
        localStorage.setItem('cityName', cityName)
        axios(`https://api.weatherbit.io/v2.0/forecast/daily?city=${cityName}&key=${"APIKEY"}&days=8`)
            .then((res) => {
                setWeather(res.data.data)
            }).then(() => setLoading(false))
            .catch((err) => console.log(err))
    }, [cityName])

    const handleCityNameUpdate = (e) => {
        setCityName(e.target.value)
    }


    const values = {
        weather,
        loading,
        handleCityNameUpdate,
        cities,
        cityName
    }

    return (
        <WeatherContext.Provider value={values}>
            {children}
        </WeatherContext.Provider>
    )
}

export const useWeather = () => useContext(WeatherContext);