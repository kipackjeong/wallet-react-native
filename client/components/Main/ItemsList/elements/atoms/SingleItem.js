import React, { useState } from "react";
import { View } from "react-native";
import { ListItem, Button } from "react-native-elements";
import { colors } from "../../../../../styles/globalStyles";

const SingleItem = ({ item, dayIndex, deletePressed }) => {
	console.log(item);
	return (
		<ListItem.Swipeable
			containerStyle={{ height: 45 }}
			bottomDivider
			leftContent={
				<Button
					title="Info"
					icon={{ name: "info", color: "white" }}
					buttonStyle={{
						backgroundColor: colors.green,
						height: "100%",
					}}
				/>
			}
			rightContent={
				<Button
					title="Delete"
					icon={{ name: "delete", color: "white" }}
					buttonStyle={{
						backgroundColor: colors.red,
						height: "100%",
					}}
					onPress={() => {
						deletePressed(dayIndex, item._id);
					}}
				/>
			}
		>
			<ListItem.Content
				style={{
					height: 45,

					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-between",
				}}
			>
				<ListItem.Title style={{ width: "70%" }}>
					{item.description}
				</ListItem.Title>

				<ListItem.Subtitle
					style={{
						width: 100,
						textAlign: "center",
					}}
				>{`$ ${item.amount}`}</ListItem.Subtitle>
			</ListItem.Content>
		</ListItem.Swipeable>
	);
};

export default SingleItem;
