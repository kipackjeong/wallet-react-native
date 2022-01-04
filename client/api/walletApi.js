import axios from "axios";
import React from "react";

const DEV_API_URL = process.env.DEV_API_URL;
const requestConfig = {
	baseURL: DEV_API_URL,
	method: null,
	params: null,
};

export const monthApi = {
	getMonthById: async (id) => {
		requestConfig = { url: "/months", method: "get", id };
		const response = await axios.request(requestConfig);
	},
	getOrCreateMonthByTodayDate: async () => {
		requestConfig = { url: "/months", method: "get" };
		const response = await axios.request(requestConfig);
		const month = response.data.data;
		return month;
	},
};
export const itemApi = {
	addItem: async (item) => {
		requestConfig = { url: "/items", method: "post", body: item };
		const response = await axios.request(requestConfig);
		console.log(response);
	},
};
