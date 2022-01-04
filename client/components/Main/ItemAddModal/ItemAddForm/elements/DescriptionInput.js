import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { Input } from "react-native-elements";
import GradientBorder from "../../../../UI/GradientBorder";
import globalStyles from "../../../../../styles/globalStyles";
import { colors } from "../../../../../styles/globalStyles";

const DescriptionInput = ({
	containerStyle,
	onDescriptionInputChangeOrSubmit,
}) => {
	function onSubmitEditingHandler(e) {
		const description = e.nativeEvent.text;
		onDescriptionInputChangeOrSubmit(description);
	}
	function onChangeTextHandler(text) {
		const description = text;
		onDescriptionInputChangeOrSubmit(description);
	}
	return (
		<View style={containerStyle}>
			<Input
				placeholder="Description"
				containerStyle={{ width: 300 }}
				style={[globalStyles.textInput, styles.descriptionInput]}
				onSubmitEditing={onSubmitEditingHandler}
				onChangeText={onChangeTextHandler}
			/>
		</View>
	);
};
const styles = StyleSheet.create({});

export default DescriptionInput;
