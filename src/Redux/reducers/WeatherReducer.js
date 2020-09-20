import { SET_WEATHER } from '../actions/ActionTypes';

const defaultState = {
    weatherData: []
};

const WeatherReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_WEATHER : {
            return { ...state, weatherData: action.payload };
          }
        default:
            return state;
    }
};

export default WeatherReducer;
