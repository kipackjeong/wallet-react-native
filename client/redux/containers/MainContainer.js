import { connect } from "react-redux";
import Main from "../../components/Main/Main";
import { initialFetchAction } from "../actions/apiAction";

const mapStateToProp = (state) => {
	return {
		month: state.month,
	};
};

const mapDispatchToProp = (dispatch) => {
	return {
		loadFetchedData: (data) => {
			dispatch(initialFetchAction(data));
		},
	};
};

const MainContainer = connect(mapStateToProp, mapDispatchToProp)(Main);

export default MainContainer;
