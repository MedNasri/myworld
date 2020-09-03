const fetchConditions = (state = {
    conditions: []
}, action) => {
    if (action.type === "SET_CONDITIONS") {
        state = { ...state, conditions: action.payload }
    }

    return state;
};

export default fetchConditions;