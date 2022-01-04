import { combineReducers } from "redux";
import addingItemReducer from "./addingItemReducer";
import monthReducer from "./monthReducer";

const rootReducer = combineReducers({
	addingItem: addingItemReducer,
	month: monthReducer,
});

export default rootReducer;
