import React, { useMemo, useState } from "react";
import {
	StyleSheet,
	View,
	Text,
	TextInput,
	KeyboardAvoidingView,
	Image,
} from "react-native";

import globalStyle from "../../../constants/globalStyles";
import dollarIcon from "../../../assets/icons/dollar.png";
import Category from "./Category/Category";
import globalStyles from "../../../constants/globalStyles";

// Parent: ItemAddModal
const ItemAddForm = ({ formContainerStyle }) => {
	return (
		<View style={formContainerStyle}>
			<View
				style={{
					width: 200,
					right: 15,
					marginTop: 20,

					flexDirection: "row",
					justifyContent: "center",
					alignItems: "center",
					backgroundColor: "#ffffff",
					borderRadius: 5,
					zIndex: 0,
				}}
			>
				<Image source={dollarIcon} style={styles.dollarIcon} />

				<TextInput
					style={[globalStyle.textInput, styles.amountTextInput]}
					keyboardType="number-pad"
				/>
			</View>
			<Category containerViewStyle={styles.categoryContainer} />
			<View>
				<Text style={[globalStyles.inputTitle, { color: "#26ab6a" }]}>
					Description
				</Text>
				<TextInput
					style={[globalStyle.textInput, styles.descriptionTextInput]}
				/>
			</View>
			<View>
				<Text style={[globalStyles.inputTitle, { color: "#6aa0f7" }]}>
					Location
				</Text>
				<TextInput
					style={[globalStyle.textInput, styles.locationTextInput]}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	categoryContainer: { marginTop: 20, width: 300, height: 250, zIndex: 0 },
	dollarIcon: {
		height: 35,
		width: 35,

		resizeMode: "stretch",
		alignItems: "center",
		backgroundColor: "#ffffff",
	},
	amountTextInput: {
		flex: 1,
		borderColor: "#ffa44f",
	},
	descriptionTextInput: {
		borderColor: "#34eb92",
	},
	locationTextInput: {
		borderColor: "#6aa0f7",
	},
});

export default ItemAddForm;
