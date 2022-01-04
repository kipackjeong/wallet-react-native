import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Pressable, Image, Button } from "react-native";

import { colors } from "../../../styles/globalStyles";
import plusIcon from "../../../assets/icons/plus.png";
import { LinearGradient } from "expo-linear-gradient";

// Parent: App
const ItemAddBtn = ({ containerStyle, visible, setItemAddModalVisible }) => {
	function onPressHandler() {
		setItemAddModalVisible(true);
	}

	return (
		<>
			{visible && (
				<View style={containerStyle}>
					<Pressable
						style={({ pressed }) => [
							styles.button,
							{ transform: pressed ? [{ scale: 1.1 }] : [] },
						]}
						onPress={onPressHandler}
					>
						<LinearGradient
							style={{
								width: 35,
								height: 35,
								justifyContent: "center",
								alignItems: "center",
								borderRadius: 50,
							}}
							colors={[colors.green, colors.blue]}
						>
							<Image
								style={styles.icon}
								source={plusIcon}
							></Image>
						</LinearGradient>
					</Pressable>
				</View>
			)}
		</>
	);
};

const styles = StyleSheet.create({
	button: {
		justifyContent: "center",
		alignItems: "center",

		shadowColor: "black",
		borderRadius: 50,
		backgroundColor: "white",
	},
	text: {
		flex: 1,
		textAlign: "center",
		textAlignVertical: "center",
	},
	icon: {
		height: "80%",
		width: "80%",
	},
});

export default ItemAddBtn;
