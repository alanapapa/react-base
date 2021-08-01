import React from 'react';

const Weather = ({loading, handleCityNameUpdate, res, cities, cityName}) => {
    return (
        <div className="container-fluid">
            <div className="selectContainer">
                <div className="select row chosen-wrapper" >
                    <select className="form-control form-control-lg" name="weatherSelect"
                            onChange={handleCityNameUpdate}
                    value={cityName}>
                        {cities.map((city, i) => <option key={i} value={city} >{city}</option>)}
                    </select>
                </div>
            </div>
            <div className="weather row">
                {loading ? "Loading..." : res}
            </div>
        </div>
    );
};

export default Weather;