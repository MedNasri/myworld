import axios from 'axios';

export const fetchWeatherByCity = (city)=> async dispatch=> {
  axios.get('http://api.weatherstack.com/current?access_key=84392b861eaf6313767009dd7b5571f1&query=' + city).then(response => {
      dispatch({ type: "FETCH_LOCATION", payload: response.data.location });
      dispatch({ type: "SET_WEATHER", payload: response.data.current });
      dispatch({ type: "SET_CONDITIONS", payload: response.data.current });
    });
      
};
