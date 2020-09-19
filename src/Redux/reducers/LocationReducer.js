import { FETCH_LOCATION } from '../actions/ActionTypes';

const defaultState = {
    location: []
};

const fetchLocation = (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_LOCATION : {
            return { ...state, location: action.payload };
          }
        default:
            return state;
    }
};

export default fetchLocation;

  

