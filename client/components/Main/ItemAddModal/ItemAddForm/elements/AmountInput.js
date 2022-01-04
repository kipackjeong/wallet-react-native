import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { Image, Input } from "react-native-elements";

import globalStyles from "../../../../../styles/globalStyles";
import { dollarIcon } from "../../../../../assets/icons/icons";

import GradientBorder from "../../../../UI/GradientBorder";

const AmountInput = ({ containerStyle, onAmountInputChangeOrSubmit }) => {
	function onChangeTextHandler(text) {
		const amount = parseInt(text);
		onAmountInputChangeOrSubmit(amount);
	}
	function onSubmitEditingHandler(e) {
		const amount = parseInt(e.nativeEvent.text);
		onAmountInputChangeOrSubmit(amount);
	}

	return (
		<View style={containerStyle}>
			<GradientBorder
				color="black"
				width={200}
				height={40}
				borderWidth={0.5}
				borderRadius={2}
				bottomOnly={true}
			>
				<View
					style={{
						top: 1.5,
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<Image source={dollarIcon} style={styles.dollarIcon} />
					<TextInput
						onSubmitEditing={onSubmitEditingHandler}
						onChangeText={onChangeTextHandler}
						style={[globalStyles.textInput, styles.amountTextInput]}
						keyboardType="number-pad"
					/>
				</View>
			</GradientBorder>
		</View>
	);
};

const styles = StyleSheet.create({
	dollarIcon: {
		height: 32,
		width: 32,
	},
	amountTextInput: {
		flex: 1,
		right: 8,
		height: 30,
		textAlign: "center",
		lineHeight: 30,
	},
});

export default AmountInput;
