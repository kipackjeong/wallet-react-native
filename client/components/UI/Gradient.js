import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../../styles/globalStyles";
const Gradient = ({ children, style, color }) => {
	const hashColors = [];
	switch (color) {
		case "red":
			hashColors.push(colors.orange, colors.red);
			break;
		case "orange":
			hashColors.push(colors.yellow, colors.orange);
			break;
		case "yellow":
			hashColors.push(colors.green, colors.yellow);
			break;
		case "green":
			hashColors.push(colors.blue, colors.green);
			break;
		case "blue":
			hashColors.push(colors.green, colors.blue);
			break;
		case "darkBlue":
			hashColors.push(colors.blue, colors.darkBlue);
			break;
		case "redGrey":
			hashColors.push(colors.redGrey, colors.grey);
			break;
		case "black":
			hashColors.push(colors.grey, colors.black);
			break;
	}

	return (
		<LinearGradient
			colors={hashColors}
			start={{ x: 1, y: 0 }}
			end={{ x: 0.2, y: 0 }}
			style={[style]}
		>
			{children}
		</LinearGradient>
	);
};

export default Gradient;
