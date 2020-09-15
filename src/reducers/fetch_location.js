const defaultState = {
    location: []
};
const fetchLocation = (state = defaultState, action) => {
    switch (action.payload) {
        case "FETCH_LOCATION":
            return { ...state, location: action.payload };
        default:
            return state;
    }
};
export default fetchLocation;