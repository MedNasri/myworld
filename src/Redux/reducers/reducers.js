import { combineReducers } from 'redux';
//import the reducers 
import LocationReducer from './LocationReducer';
import WeatherReducer from './WeatherReducer';
//combine reducers
const reducers = combineReducers({

    WeatherReducer: WeatherReducer,
    LocationReducer: LocationReducer

});

export default reducers;