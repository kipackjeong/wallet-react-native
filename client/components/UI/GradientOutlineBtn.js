import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button } from "react-native-elements";

import { colors } from "../../styles/globalStyles";
import GradientBorder from "./GradientBorder";

const GradientOutlineBtn = ({
	width = 90,
	height = 40,
	borderWidth = 4,
	containerStyle,
	color,
	title,
	onPress,
}) => {
	return (
		<GradientBorder
			style={containerStyle}
			color={color}
			width={width}
			height={height}
			borderWidth={borderWidth}
		>
			<Button
				titleStyle={{
					bottom: 2,
					color: colors[color],
				}}
				containerStyle={{
					borderRadius: 5,
				}}
				buttonStyle={{
					backgroundColor: "transparent",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					borderRadius: 5,
				}}
				title={title}
				onPress={onPress}
			/>
		</GradientBorder>
	);
};

export default GradientOutlineBtn;
