import { combineReducers } from 'redux';
//import the reducers 
import FetchWeather from './fetch_weather';
import FetchLocation from './fetch_location';
//combine reducers
const reducers = combineReducers({

    FetchWeatherReducer: FetchWeather,
    FetchWeatherLocation: FetchLocation,
});

export default reducers;