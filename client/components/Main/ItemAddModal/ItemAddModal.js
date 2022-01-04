import React, { useCallback, useEffect } from "react";
import { View, StyleSheet, Modal, KeyboardAvoidingView } from "react-native";
import { BlurView } from "expo-blur";

//#region import components
import ItemAddForm from "./ItemAddForm/ItemAddForm";
//#endregion

// Parent: App
const ItemAddModal = ({
	itemAddModalVisible,
	setItemAddModalVisible,
	addItem,
	addingItem,
	month,

	updateAddingItemAmount,
	updateAddingItemCategory,
	updateAddingItemDescription,
	updateAddingItemLocation,
	updateAddingItemDate,
	resetAddingItem,
}) => {
	const updateAmountHandler = (amount) => {
		updateAddingItemAmount(amount);
	};
	const updateCategoryHandler = (category) => {
		updateAddingItemCategory(category);
	};
	const updateDescriptionHandler = (description) => {
		updateAddingItemDescription(description);
	};
	const updateLocationHandler = (location) => {
		updateAddingItemLocation(location);
	};
	const updateDateHandler = (date) => {
		updateAddingItemDate(date);
	};
	const saveHandler = () => {
		addItem(addingItem);
		resetAddingItem();
	};

	return (
		<Modal
			presentationStyle="fullScreen"
			animationType="slide"
			visible={itemAddModalVisible}
			onRequestClose={() => {
				setItemAddModalVisible(!itemAddModalVisible);
			}}
		>
			<BlurView intensity={100} style={styles.blurView}>
				<KeyboardAvoidingView
					behavior={Platform.OS === "ios" ? "padding" : "position"}
					style={styles.KeyboardAvoidingView}
				>
					<ItemAddForm
						month={month}
						addingItem={addingItem}
						containerStyle={styles.formContainerStyle}
						setItemAddModalVisible={setItemAddModalVisible}
						addItem={addItem}
						handlers={{
							updateAmountHandler,
							updateCategoryHandler,
							updateDescriptionHandler,
							updateLocationHandler,
							updateDateHandler,
							saveHandler,
						}}
					/>
				</KeyboardAvoidingView>
			</BlurView>
		</Modal>
	);
};
const styles = StyleSheet.create({
	formContainerStyle: {
		flexDirection: "column",
		alignItems: "center",
	},
	blurView: {
		height: "100%",
		alignSelf: "center",
		justifyContent: "flex-start",
	},
	KeyboardAvoidingView: {
		marginTop: 20,
		width: 360,
		height: 700,
		borderColor: "black",
		borderRadius: 5,
	},
});
export default ItemAddModal;
