import axios from 'axios';

export function fetchWeatherByCity(city) {

  return function (dispatch) {
    axios.get('http://api.weatherstack.com/current?access_key=84392b861eaf6313767009dd7b5571f1&query=' + city).then(response => {
      
    let arr = []
      for (var key in response.data.location) {
        arr.push(response.data.location[key])
      };
      dispatch({ type: "FETCH_LOCATION", payload: arr });

      //parsing the object to store the data in an array
      let arr2 = []
      for (var key2 in response.data.current) {
        arr2.push(response.data.current[key2])
       };
      //search the index of the conditons array
           console.log(arr2)
      //splice (remove) it from the array
      arr2.splice(5, 1);
      dispatch({ type: "SET_WEATHER", payload: arr2 });

      let arr3 = []
      for (var key3 in response.data.current.condition) {
        arr3.push(response.data.current.condition[key3])
      };
      dispatch({ type: "SET_CONDITIONS", payload: arr3 });
      // console.log the FULL response
           console.log(response)

    }).catch(err => {
      console.log(err)
    });
    // we got now 1 action, which dispatches 3 actions or events   
  };
};