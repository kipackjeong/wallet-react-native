import { connect } from "react-redux";

import { deleteItemAction } from "../actions/itemAction";
import ItemsList from "../../components/Main/ItemsList/ItemsList";

const mapStateToProp = (state) => {
	return {
		month: state.month,
	};
};

const mapDispatchToProp = (dispatch) => {
	return {
		deleteItem: (index, id) => {
			dispatch(deleteItemAction(index, id));
		},
	};
};
const ItemsListContainer = connect(
	mapStateToProp,
	mapDispatchToProp
)(ItemsList);

export default ItemsListContainer;
