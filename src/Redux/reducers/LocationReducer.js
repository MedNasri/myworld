import { FETCH_LOCATION } from '../actions/ActionTypes';

const defaultState = {
    location: []
};

const fetchLocation = (state = defaultState, action) => {
    if (action.type === FETCH_LOCATION) {
        state = { ...state, location: action.payload }
    }
    return state;
};

export default fetchLocation;