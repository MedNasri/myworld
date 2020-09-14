import logger from "redux-logger";
import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
//  import the reducers
import Reducers from "../reducers/reducers"; 

//--- MIDDLEWARE
const middleware = applyMiddleware(logger, thunk);

//--- STORE
const StoreRef = createStore(Reducers, middleware);

export default StoreRef;
