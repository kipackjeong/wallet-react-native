import React, { useState } from "react";
import { Button, ListItem } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";
import TouchableScale from "react-native-touchable-scale";
import { colors, rainbow } from "../../../../styles/globalStyles";
import { ListItemBase } from "react-native-elements/dist/list/ListItemBase";
import ListItemSwipeable from "react-native-elements/dist/list/ListItemSwipeable";
import SingleItem from "./atoms/SingleItem";
import WeekPanel from "./atoms/WeekPanel";

const DayItems = ({ dayIndex, dayItems, deletePressed }) => {
	const calculateTotal = (items) => {
		var totalAmount = 0;
		for (var item of items) {
			totalAmount += item.amount;
		}
		return totalAmount;
	};

	const totalAmount = calculateTotal(dayItems.items);
	return (
		<>
			<WeekPanel
				dayItems={dayItems}
				dayIndex={dayIndex}
				totalAmount={totalAmount}
			/>
			{dayItems.items.map((item, itemIndex) => (
				<SingleItem
					key={`${item.id}_${itemIndex}`}
					item={item}
					dayIndex={dayIndex}
					itemIndex={itemIndex}
					deletePressed={deletePressed}
				/>
			))}
		</>
	);
};

export default DayItems;
