import React, { useState, useEffect }  from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWeatherByCity } from '../Redux/actions/WeatherActions';
import '../ressources/styles/weather.css';

const WeatherT = () => {

    const [Country, setCountry] = useState(null);   
    const dispatch = useDispatch();
    const apiResponse = useSelector (Store=>Store.WeatherReducer.weatherData);
    const apiLocation = useSelector (Store=>Store.LocationReducer.location);

    useEffect(() => {
        dispatch(fetchWeatherByCity('Tunisia'));
    })

    const changeHandler = (e) => {
        const Country = e.target.value;
        setCountry(Country);
    };

    const search = () => {
        fetchWeatherByCity(Country);
    };
       
    return ( 
        <div className='container'>
            <h1>Weather App </h1>
            <div className='form'>
                <input name='city' placeholder='Belgium' onChange={changeHandler} />
                <button onClick={search}> <i className='fas fa-search'></i> </button>
            </div>
            <div className='dashboard'>
                <h3><i className='fas fa-chart-bar'></i> Dashboard </h3>
                <h2><i className='far fa-compass'></i> Location</h2>
                <div className='data-container'>
                    <div className='square'>
                        <p>City</p>
                        <p className='data'>{apiLocation.name}</p>
                    </div>
                    <div className='square'>
                        <p>Country</p>
                        <p className='data'>{apiLocation.country}</p>
                    </div>
                    <div className='square'>
                        <p>Time Zone Id</p>
                        <p className='data'>{apiLocation.timezone_id}</p>
                    </div>
                    <div className='square'>
                        <p>Local Time</p>
                        <p className='data'>{apiLocation.localtime}</p>
                    </div>
                </div>
                <h2><i className='fas fa-tint'></i> Current Conditions</h2>
                <div className='data-container'>
                    <div className='square'>
                        <p>Condition</p>
                        <p className='data'>{apiResponse.weather_descriptions}</p>
                    </div>
                    <div className='square'>
                        <img src={apiResponse.weather_icons} alt='current weather condition icon' />
                    </div>
                </div>
                <h2><i className='fas fa-thermometer-quarter'></i> Other Conditions </h2>
                <div className='data-container'>
                    <div className='square'>
                        <p>Clouds</p>
                        <p className='data'>{apiResponse.cloudcover} %</p>
                    </div>
                    <div className='square'>
                        <p>Feels like (Celcius)</p>
                        <p className='data'>{apiResponse.temperature} °C</p>
                    </div>
                    <div className='square'>
                        <p>Feels like (Fahrenheit)</p>
                        <p className='data'>{apiResponse.feelslike} °F</p>
                    </div>
                    <div className='square'>
                        <p>Humidity</p>
                        <p className='data'>{apiResponse.humidity} %</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
    
export default WeatherT;        