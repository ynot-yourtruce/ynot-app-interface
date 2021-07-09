import { combineReducers } from "redux";
import connection from "./connection";
import tokenSelector from "./tokenSelector";

// Aggreating all the reducers defined 
const rootReducer = combineReducers({
    tokenSelector: tokenSelector,
    connection: connection
});

export default rootReducer;