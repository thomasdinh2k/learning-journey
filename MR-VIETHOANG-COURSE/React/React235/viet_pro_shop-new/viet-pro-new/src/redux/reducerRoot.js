import { combineReducers } from "redux";
import reducerBlue from "./reducers/reducerBlue";
import reducerRed from "./reducers/reducerRed";

const reducerRoot = combineReducers({
	reducerRed: reducerRed,
	reducerBlue: reducerBlue,
});

export default reducerRoot;
