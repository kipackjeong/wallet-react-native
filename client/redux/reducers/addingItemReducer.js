const emptyState = {
	date: null,
	amount: 0,
	category: "",
	description: "",
	location: "",
};
const addingItemReducer = (state = emptyState, action) => {
	const type = action.type;
	const value = action.value;
	const prevStates = { ...state };

	switch (type) {
		case "AMOUNT":
			prevStates.amount = value;
			return prevStates;
		case "CATEGORY":
			prevStates.category = value;
			return prevStates;
		case "DESCRIPTION":
			prevStates.description = value;
			return prevStates;
		case "LOCATION":
			prevStates.location = value;
			return prevStates;
		case "DATE":
			prevStates.date = value;
			return prevStates;
		case "RESET":
			return emptyState;
		default:
			return state;
	}
	return state;
};

export default addingItemReducer;
