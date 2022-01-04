import { itemApi } from "../api/walletApi";

const itemService = {
	addItem: (item) => {
		itemApi.addItem(item);
	},
};

export default itemService;
