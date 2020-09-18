import { combineReducers } from 'redux';
//import the reducers 
import FetchLocation from './LocationReducer';
import fetchWeatherData from './WeatherReducer';
//combine reducers
const reducers = combineReducers({

    FetchWeatherReducer: fetchWeatherData,
    FetchWeatherLocation: FetchLocation

});

export default reducers;