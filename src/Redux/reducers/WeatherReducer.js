import { SET_WEATHER } from '../actions/ActionTypes';

const defaultState = {
    weatherData: []
};

const fetchWeatherData = (state = defaultState, action) => {
    if (action.type === SET_WEATHER) {
        state = { ...state, weatherData: action.payload }
    }
    return state;
};

export default fetchWeatherData;

