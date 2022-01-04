import React from "react";
import { StyleSheet, View } from "react-native";
import Gradient from "./Gradient";

const GradientBorder = ({
	style,
	color,
	children,
	width,
	height,
	borderWidth = 3,
	borderRadius = 5,
	bottomOnly = false,
}) => {
	const innerBoxHeight = height - borderWidth;
	const innerBoxWidth = bottomOnly ? width : width - borderWidth;

	const barLocationStyle = bottomOnly ? "flex-start" : "center";

	return (
		<Gradient
			color={color}
			style={[
				styles.gradient,
				{
					height,
					width,
					borderRadius,
					justifyContent: barLocationStyle,
				},
			]}
		>
			<View
				style={[
					style,
					{
						height: innerBoxHeight,
						width: innerBoxWidth,
						borderRadius,
						backgroundColor: "white",
					},
				]}
			>
				{children}
			</View>
		</Gradient>
	);
};

const styles = StyleSheet.create({
	gradient: {
		alignItems: "center",
	},
});
export default GradientBorder;
