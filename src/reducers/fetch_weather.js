const fetchWeatherData = (
    state = {
        weatherData: [] 
    }, action) => {
     if (action.type === "SET_WEATHER") {
        state = { ...state, weatherData: action.payload }
    }

    return state;
};

export default fetchWeatherData;

