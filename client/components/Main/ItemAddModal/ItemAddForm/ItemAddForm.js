import React, {
	useCallback,
	useEffect,
	useMemo,
	useReducer,
	useState,
} from "react";
import { StyleSheet, View, TextInput, Image, Alert } from "react-native";

//#region elements
import Calendar from "./elements/Calendar";
import AmountInput from "./elements/AmountInput";
import Category from "./elements/Category/Category";
import DescriptionInput from "./elements/DescriptionInput";
import LocationInput from "./elements/LocationInput";
//#endregion

//#region UI
import GradientOutlineBtn from "../../../UI/GradientOutlineBtn";
import { theme } from "../../../../styles/globalStyles";
//#region

// Parent: ItemAddModal
const ItemAddForm = ({
	containerStyle,
	addItem,
	addingItem,
	setItemAddModalVisible,
	handlers,
	month,
}) => {
	const { amount, category, description, location } = addingItem;
	function showAlert(...params) {
		params = params.filter((param) => param != null);
		Alert.alert("Missing Field", `${params.map((param) => param)}`, [
			{
				text: "Close",
				onPress: () => {
					console.log("close alert");
				},
			},
		]);
	}

	function onSaveButtonClicked() {
		if (!description || amount == 0 || !category) {
			showAlert(
				!description ? "description" : null,
				!amount ? "amount" : null,
				!category ? "category" : null
			);
			return;
		}
		const newItem = {
			id: `jaoiag${Math.random()}`,
			description: description,
			price: amount,
			location: location,
			category: category && category.title,
		};

		addItem(newItem);
		handlers.saveHandler();
		setItemAddModalVisible((prev) => !prev);
	}
	function onCancelButtonClicked() {
		setItemAddModalVisible((prev) => !prev);
	}

	const ButtonGroup = () => {
		return (
			<View style={styles.btnGroupContainer}>
				<GradientOutlineBtn
					containerStyle={styles.btnContainerStyle}
					color={theme}
					title="save"
					onPress={onSaveButtonClicked}
				/>

				<GradientOutlineBtn
					containerStyle={styles.btnContainerStyle}
					color={theme}
					title="cancel"
					onPress={onCancelButtonClicked}
				/>
			</View>
		);
	};

	return (
		<View style={containerStyle}>
			<Calendar onDateChange={handlers.updateDateHandler} />
			<AmountInput
				containerStyle={styles.amountInputContainer}
				onAmountInputChangeOrSubmit={handlers.updateAmountHandler}
			/>
			<Category
				containerStyle={styles.categoryContainer}
				category={category}
				onCategorySelected={handlers.updateCategoryHandler}
			/>
			<DescriptionInput
				containerStyle={styles.descriptionInputContainer}
				onDescriptionInputChangeOrSubmit={
					handlers.updateDescriptionHandler
				}
			/>
			<LocationInput
				containerStyle={styles.locationInputContainer}
				onLocationInputChangeOrSubmit={handlers.updateLocationHandler}
			/>
			<ButtonGroup />
		</View>
	);
};

const styles = StyleSheet.create({
	amountInputContainer: {
		paddingTop: 80,
	},
	categoryContainer: {
		paddingTop: 20,
		width: 300,
		height: 300,
	},
	descriptionInputContainer: { paddingTop: 20 },
	locationInputContainer: { paddingTop: 20 },
	btnGroupContainer: {
		paddingTop: 30,
		height: 100,
		width: 210,
		flexDirection: "row",
		justifyContent: "space-around",
	},
});

export default ItemAddForm;
