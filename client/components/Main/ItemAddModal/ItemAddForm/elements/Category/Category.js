import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Input } from "react-native-elements";
import { color } from "react-native-elements/dist/helpers";
import globalStyles, { colors } from "../../../../../../styles/globalStyles";
import GradientBorder from "../../../../../UI/GradientBorder";
import CategoryCanvas from "./atoms/CategoryCanvas";

// Parent : ItemAddForm
const Category = ({ containerStyle, category, onCategorySelected }) => {
	return (
		<View style={containerStyle}>
			<CategoryCanvas
				selectedCategory={category}
				onCategorySelected={onCategorySelected}
			/>
			<Input
				placeholder="Category"
				style={[globalStyles.textInput, styles.categoryInput]}
				value={category ? category.title : ""}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	gradient: {
		width: 300,
		height: 40,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 5,
	},
	categoryInput: {
		paddingTop: 0,
		width: 296,
		borderWidth: 0,
		borderRadius: 5,
	},
});

export default Category;
