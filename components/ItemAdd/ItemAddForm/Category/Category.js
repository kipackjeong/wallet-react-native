import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { TextInput } from "react-native";
import globalStyles from "../../../../constants/globalStyles";
//#region import components
import CategoryCanvas from "./partials/CategoryCanvas";
//#endregion
// Parent : ItemAddForm
const Category = ({ containerViewStyle }) => {
	const [selectedCategory, setSelectedCategory] = useState(null);

	return (
		<View style={containerViewStyle}>
			<CategoryCanvas
				selectedCategory={selectedCategory}
				setSelectedCategory={setSelectedCategory}
			/>
			<View style={{ width: 300, justifyContent: "flex-start" }}>
				<Text style={[globalStyles.inputTitle, { color: "#c4ba33" }]}>
					Category
				</Text>
			</View>

			<TextInput
				style={[globalStyles.textInput, styles.categoryInput]}
				value={selectedCategory ? selectedCategory.title : ""}
			></TextInput>
		</View>
	);
};

const styles = StyleSheet.create({
	categoryInput: {
		borderColor: "#ebe049",
	},
});

export default Category;
