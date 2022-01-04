import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Card } from "react-native-elements";
import { colors } from "../../../styles/globalStyles";

const Budget = ({ month, containerStyle }) => {
	console.log(month);
	const monthBudget = month.budget;
	const monthName = month.name;
	const monthUsedTotal = month.usedTotal;
	const monthRemain = monthBudget - monthUsedTotal;
	const weekBudget = month.budget / 4;
	const weekUsedTotal = month.weeks[0].budget;
	const weekRemain = weekBudget - weekUsedTotal;
	return (
		<Card containerStyle={containerStyle} wrapperStyle={{ width: "100%" }}>
			<View style={[styles.row, styles.headRow]}>
				<Text style={[styles.text, styles.title]}>Budget</Text>
				<Text style={[styles.text, styles.title]}>Used</Text>
				<Text style={[styles.text, styles.title]}>Remain</Text>
			</View>
			<View style={styles.row}>
				<Text style={[styles.text, styles.title]}> {monthName}</Text>
				<Text style={styles.text}> {monthBudget}</Text>
				<Text style={styles.text}> {monthUsedTotal}</Text>
				<Text style={styles.text}> {monthRemain}</Text>
			</View>
			<View style={styles.row}>
				<Text style={[styles.text, styles.title]}> Week1</Text>
				<Text style={styles.text}> {weekBudget}</Text>
				<Text style={styles.text}> {weekUsedTotal}</Text>
				<Text style={styles.text}> {weekRemain}</Text>
			</View>
		</Card>
	);
	return <View></View>;
};

const styles = StyleSheet.create({
	headRow: {
		width: "100%",
		justifyContent: "space-around",
		paddingLeft: 83,
	},
	row: {
		flexDirection: "row",
		justifyContent: "space-around",
	},
	title: {
		fontSize: 16,
		fontWeight: "600",
		color: "black",
	},
	text: {
		width: "30%",
		textAlign: "center",
		lineHeight: 30,
		color: "grey",
	},
});

export default Budget;
