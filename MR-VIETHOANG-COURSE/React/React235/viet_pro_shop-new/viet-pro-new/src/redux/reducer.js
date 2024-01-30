import { combineReducers } from "redux";

import randomReducer from "./reducer/randomNumReducer";
import podoReducer from "./reducer/podoReducer";

const rootReducer = combineReducers({
    randomReducer: randomReducer,
    podoReducer: podoReducer
    // Any remaining reducers...
})

export default rootReducer