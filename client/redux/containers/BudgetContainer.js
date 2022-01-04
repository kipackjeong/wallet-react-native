import { connect } from "react-redux";
import Budget from "../../components/Main/Budget/Budget";

const mapStateToProp = (state) => {
	return {
		month: state.month,
	};
};

const BudgetContainer = connect(mapStateToProp)(Budget);

export default BudgetContainer;
