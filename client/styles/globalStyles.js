"use strict";

import { StyleSheet } from "react-native";

export const colors = {
	red: "#ff524f",
	orange: "#ffa44f",
	yellow: "#ebe049",
	green: "#34eb92",
	lightBlue: "#94e4ff",
	blue: "#6dd8fc",
	darkBlue: "#27b3cc",
	purple: "#913fc9",
	redGrey: "#8f7171",
	black: "#404040",
	grey: "#787878",
};
export const rainbow = [
	"#ff524f",
	"#ffa44f",
	"#ebe049",
	"#34eb92",
	"#6aa0f7",
	"#402ea3",
	"#913fc9",
	"#833dac",
];
export const theme = "black";

export default StyleSheet.create({
	inputTitle: {
		fontSize: 18,
		marginBottom: 10,
	},
	textInput: {
		textAlign: "center",
		justifyContent: "center",
		alignItems: "center",
		fontSize: 20,
	},
});
