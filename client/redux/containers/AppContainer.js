import { connect } from "react-redux";
import App from "../../App";

const mapStateToProp = (state) => {
	return {
		month: state.month,
		addingItem: state.addingitem,
	};
};
const mapDispatchToProp = (dispatch) => {
	return {
		initialFetch: () => {
			dispatch();
		},
	};
};
const AppContainer = connect(mapStateToProp)(App);

export default AppContainer;
