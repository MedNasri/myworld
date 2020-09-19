import { combineReducers } from 'redux';
//import the reducers 
import LocationReducer from './LocationReducer';
import fetchWeatherData from './WeatherReducer';
//combine reducers
const reducers = combineReducers({

    FetchWeatherReducer: fetchWeatherData,
    LocationReducer: LocationReducer

});

export default reducers;