import {
	getToday,
	getLastDateOfMonth,
	getSevenDays,
	generateMMDDYYYY,
} from "./utilities/date";

const today = getToday();
const sevenDays = getSevenDays(today);

const mockData = {
	date: today,
	month: {
		id: "monthId",
		name: "December",
		budget: 1200,
		usedTotal: 50,
		weekOne: {
			id: "weekId",
			monthId: "12",
			date: sevenDays[0],
			usedTotal: 50,
			days: [
				{
					// day obj
					date: "12/1/2021",
					items: [
						{
							// item obj
							itemId: "itemId",
							dateId: "dateId",
							category: "grocery",
							description: "food",
							location: "kroger",
							date: "12/1/2021",
							price: 10,
						},
						{
							// item obj
							itemId: "itemId",
							dateId: "dateId",
							category: "grocery",
							description: "food",
							location: "kroger",
							date: "12/1/2021",
							price: 10,
						},
						{
							// item obj
							itemId: "itemId",
							dateId: "dateId",
							category: "grocery",
							description: "food",
							location: "kroger",
							date: "12/1/2021",
							price: 10,
						},
						{
							// item obj
							itemId: "itemId",
							dateId: "dateId",
							category: "grocery",
							description: "food",
							location: "kroger",
							date: "12/1/2021",
							price: 10,
						},
					],
				},
				{
					date: "12/4/2021",
					items: [
						{
							id: "itemId",
							date: "dateId",
							category: "transportation",
							description: "gas",
							location: "enmarket",
							price: 10,
						},
						{
							id: "itemId",
							date: "dateId",
							category: "medical",
							description: "tylenol for Noah",
							location: "walmart",
							price: 10,
						},
						{
							id: "itemId",
							date: "dateId",
							category: "transportation",
							description: "gas",
							location: "enmarket",
							price: 10,
						},
						{
							id: "itemId",
							date: "dateId",
							category: "transportation",
							description: "gas",
							location: "enmarket",
							price: 10,
						},
					],
				},
				{
					date: "12/5/2021",
					items: [
						{
							id: "itemId",
							date: "dateId",
							category: "restaurant",
							description: "hamburger",
							location: "mc donald",
							price: 10,
						},
					],
				},
				{
					date: "12/6/2021",
					items: [
						{
							id: "itemId",
							date: "dateId",
							category: "bill",
							description: "electricity",
							location: "",
							price: 10,
						},
					],
				},
			],
		},
	},
};

export default mockData;
