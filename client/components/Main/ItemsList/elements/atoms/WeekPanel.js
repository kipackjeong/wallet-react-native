import React from "react";
import { StyleSheet } from "react-native";
import { ListItem } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";
import TouchableScale from "react-native-touchable-scale";
import { colors, rainbow } from "../../../../../styles/globalStyles";

const WeekPanel = ({ dayItems, dayIndex, totalAmount }) => {
	return (
		<ListItem
			Component={TouchableScale}
			friction={80}
			tension={100} // These props are passed to the parent component (here TouchableScale)
			activeScale={0.9} //
			linearGradientProps={{
				colors: [colors.grey, colors.black],
				start: { x: 1, y: 0.3 },
				end: { x: 0.3, y: 1 },
				height: 40,
				elevation: 5,
			}}
			ViewComponent={LinearGradient} // Only if no expo
			containerStyle={{
				height: 40,
				borderRadius: 5,
			}}
			style={{
				elevation: 5,
			}}
		>
			<ListItem.Content
				style={{
					flexDirection: "row",
					justifyContent: "space-between",
					alignItems: "center",
					height: 40,
				}}
			>
				<ListItem.Title
					style={[
						styles.text,
						{
							textAlign: "center",
							fontWeight: "bold",
						},
					]}
				>
					12/19/2021
				</ListItem.Title>
				<ListItem.Subtitle
					style={[
						styles.text,
						{
							right: 14,
						},
					]}
				>
					$ {totalAmount}
				</ListItem.Subtitle>
			</ListItem.Content>
		</ListItem>
	);
};

const styles = StyleSheet.create({
	text: {
		color: "white",
	},
});

export default WeekPanel;
