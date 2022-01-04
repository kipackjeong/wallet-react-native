export const addItemAction = (value) => {
	return {
		type: "ADD_ITEM",
		value: value,
	};
};

export const deleteItemAction = (index, id) => {
	return {
		type: "DELETE_ITEM",
		value: { index: index, id: id },
	};
};

export const updateItemAction = (value) => {
	return {
		type: "UPDATE_ITEM",
		value: value,
	};
};
