import React from "react";
import mockData from "../../mockData";
import monthApi from "../../api/monthApi";
/* 
    month : {    
        id: str  
        name: str
        total: int
        weeks: {
            weekOne : {
                id: str
                total: int
                items: [item...]
            }
            weekTwo : {
                id: str
                total: int
                items: [item...]
            }
            weekThree : {
                id: str
                total: int
                items: [item...]
            }
            weekFour : {
                id: str
                total: int
                items: [item...]
            }
        }
    }
*/
const monthReducer = (state = {}, action) => {
	switch (action.type) {
		case "INITIAL_FETCH":
			console.log("redux/reducers/monthReducer - INITIAL_FETCH");
			return action.value;
		case "ADD_ITEM":
			const newState = { ...state };
			for (var week of state.weeks) {
				week.index;
			}
			for (var i = 0; i < state.weeks.length; i++) {
				if (state.weeks[i]._id === action.value.week) {
					newState.weeks[i] = { ...state.weeks[i] };
					newState.weeks[i].usedTotal += action.value.amount;
					newState.weeks[i].days.push(action.value);
				}
			}

			console.log("redux/reducers/monthReducer - Add_Item");
			console.log(newState);
			console.log("redux/reducers/monthReducer - Add_Item");

			return newState;
	}
	return state;
};

export default monthReducer;
