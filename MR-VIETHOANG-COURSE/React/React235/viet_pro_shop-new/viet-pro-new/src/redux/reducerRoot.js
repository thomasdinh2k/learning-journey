import { combineReducers } from "redux";
import reducerBlue from "./reducers/reducerBlue";
import reducerRed from "./reducers/reducerRed";
import reducerTodo from "./reducers/reducerTodo";
import memberListReducer from "./reducers/reducerMemberList";

const reducerRoot = combineReducers({
	reducerRed: reducerRed,
	reducerBlue: reducerBlue,
	reducerTodo: reducerTodo,
	reducerMemberList: memberListReducer
});

export default reducerRoot;
