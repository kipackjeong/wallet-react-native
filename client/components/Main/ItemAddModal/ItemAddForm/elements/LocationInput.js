import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { Input } from "react-native-elements";

import globalStyles, { colors } from "../../../../../styles/globalStyles";
import GradientBorder from "../../../../UI/GradientBorder";

const LocationInput = ({ containerStyle, onLocationInputChangeOrSubmit }) => {
	function onSubmitEditingHandler(e) {
		const location = e.nativeEvent.text;
		onLocationInputChangeOrSubmit(location);
	}
	function onChangeTextHandler(text) {
		const location = text;
		onLocationInputChangeOrSubmit(location);
	}
	return (
		<View style={containerStyle}>
			<Input
				placeholder="Location"
				containerStyle={{ width: 300 }}
				style={[globalStyles.textInput, styles.locationInput]}
				onSubmitEditing={onSubmitEditingHandler}
				onChangeText={onChangeTextHandler}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	locationInput: {},
});

export default LocationInput;
