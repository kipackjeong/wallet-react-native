import { StatusBar } from "expo-status-bar";
import React, { useCallback } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Card } from "react-native-elements";
import { colors } from "../../../styles/globalStyles";
import DayItems from "./elements/DayItems";
/*
    Parent : App
*/
const ItemsList = ({ containerStyle, month, deleteItem }) => {
	const deletePressed = (index, id) => {
		deleteItem(index, id);
	};
	const weekItems = month.weeks[0].days ?? [];

	if (!weekItems) {
		return (
			<View>
				<Text> Loading... </Text>
			</View>
		);
	} else {
		return (
			<Card
				containerStyle={[containerStyle, { paddingTop: 0 }]}
				wrapperStyle={{
					width: "100%",
					flex: 1,
					justifyContent: "center",
				}}
			>
				<Text style={[styles.weekText, styles.text]}> WEEK 1 </Text>
				<ScrollView
					style={styles.weekItemsList}
					nestedScrollEnabled={true}
				>
					{weekItems.map((dayItems, dayIndex) => {
						return (
							<DayItems
								key={`${dayItems._id}${dayIndex}`}
								dayIndex={dayIndex}
								dayItems={dayItems}
								deletePressed={deletePressed}
							/>
						);
					})}
				</ScrollView>
			</Card>
		);
	}
};
const styles = StyleSheet.create({
	weekItemsList: {
		width: "100%",
	},
	expenseDetail: {
		flex: 1,
		fontSize: 20,
	},
	expenseDate: {
		flex: 1,
		fontSize: 25,
	},
	text: {
		textAlign: "center",
		color: "black",
	},
	weekText: {
		color: "black",

		height: "7%",

		textAlign: "center",
		textAlignVertical: "center",
		fontSize: 20,
		fontWeight: "600",
	},
});

export default React.memo(ItemsList);
