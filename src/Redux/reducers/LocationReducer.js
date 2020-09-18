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

// const defaultState = {
//     location: []
// };

// const fetchLocation = (state = defaultState, action) => {
//     switch (action.payload) {
//         case FETCH_LOCATION : {
//             return { ...state, location: action.payload };
//           }
//         default:
//             return state;
//     }
// };

// export default fetchLocation;

  

