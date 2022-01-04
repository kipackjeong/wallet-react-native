export const resetAddingItemAction = (value) => {
	return {
		type: "RESET",
	};
};

export const updateAddingItemAmountAction = (value) => {
	return {
		type: "AMOUNT",
		value,
	};
};

export const updateAddingItemCategoryAction = (value) => {
	return {
		type: "CATEGORY",
		value,
	};
};

export const updateAddingItemDescriptionAction = (value) => {
	return {
		type: "DESCRIPTION",
		value,
	};
};

export const updateAddingItemLocationAction = (value) => {
	return {
		type: "LOCATION",
		value,
	};
};

export const updateAddingItemDateAction = (value) => {
	return {
		type: "DATE",
		value,
	};
};
