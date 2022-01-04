import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Card } from "react-native-elements";
import { colors } from "../../../constants/globalStyles";
import CalendarBox from "../../UI/CalendarBox/CalendarBox";

const DateBar = ({ containerStyle, date }) => {
	return <CalendarBox containerStyle={containerStyle} />;
};

const styles = StyleSheet.create({
	dateBar: {
		textAlign: "center",
	},
	text: {
		fontSize: 30,
		fontWeight: "800",
		color: "white",
	},
});

export default DateBar;
