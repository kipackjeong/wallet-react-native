import React from "react";
import { connect } from "react-redux";

import ItemAddModal from "../../components/Main/ItemAddModal/ItemAddModal";
import {
	resetAddingItemAction,
	updateAddingItemAmountAction,
	updateAddingItemCategoryAction,
	updateAddingItemDateAction,
	updateAddingItemDescriptionAction,
	updateAddingItemLocationAction,
} from "../actions/addingItemAction";
import { addItemAction, deleteItemAction } from "../actions/itemAction";

const mapStateToProp = (state) => {
	return {
		addingItem: state.addingItem,
		month: state.month,
	};
};

const mapDispatchToProp = (dispatch) => {
	return {
		addItem: (item) => {
			dispatch(addItemAction(item));
		},
		resetAddingItem: () => {
			dispatch(resetAddingItemAction());
		},
		updateAddingItemAmount: (amount) => {
			dispatch(updateAddingItemAmountAction(amount));
		},
		updateAddingItemCategory: (category) => {
			dispatch(updateAddingItemCategoryAction(category));
		},
		updateAddingItemDescription: (description) => {
			dispatch(updateAddingItemDescriptionAction(description));
		},
		updateAddingItemLocation: (location) => {
			dispatch(updateAddingItemLocationAction(location));
		},
		updateAddingItemDate: (date) => {
			dispatch(updateAddingItemDateAction(date));
		},
	};
};
const ItemAddModalContainer = connect(
	mapStateToProp,
	mapDispatchToProp
)(ItemAddModal);

export default ItemAddModalContainer;
