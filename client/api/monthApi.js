import axios from "axios";
import React from "react";
const DEV_API_URL = process.env.DEV_API_URL;
const requestConfig = {
	baseURL: DEV_API_URL,
	url: "/months",
	method: null,
	params: null,
};
const monthApi = {
	getMonthById: async (id) => {
		requestConfig.method = "get";
		requestConfig.params = { id: "61b9e05d6970d41db00ee383" };
		const response = await axios.request(requestConfig);
	},
	getOrCreateMonthByTodayDate: async () => {
		requestConfig.method = "post";
		const response = await axios.request(requestConfig);
		const month = response.data.data;
		return month;
	},
};

export default monthApi;
