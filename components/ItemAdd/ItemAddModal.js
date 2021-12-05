import React, { useState } from "react";
import {
	View,
	StyleSheet,
	Text,
	Modal,
	Pressable,
	ScrollView,
	KeyboardAvoidingView,
} from "react-native";
import { Image, Button } from "react-native-elements";
import KeyboardSpacer from "react-native-keyboard-spacer";

//#region import components
import ItemAddForm from "./ItemAddForm/ItemAddForm";
import CalendarBox from "./CalendarBox/CalendarBox";
import Gradient from "../Gradient";
//#endregion

import checkMarkIcon from "../../assets/icons/check.png";

// Parent: App
const ItemAddModal = ({ modalVisible, setModalVisible }) => {
	return (
		<Modal
			style={styles.modalView}
			animationType="slide"
			visible={modalVisible}
			onRequestClose={() => {
				setModalVisible(!modalVisible);
			}}
			transparent={true}
		>
			<Gradient style={{ opacity: 0.97 }}>
				<KeyboardAvoidingView
					behavior={Platform.OS === "ios" ? "padding" : "position"}
					contentContainerStyle={{
						marginTop: 50,
						alignItems: "center",
						justifyContent: "center",
						elevation: 5,
					}}
				>
					<CalendarBox
						calendarBoxContainerStyle={
							styles.calendarBoxContainerStyle
						}
					/>
					<ItemAddForm
						formContainerStyle={styles.formContainerStyle}
					/>

					<View
						style={{
							flexDirection: "row",
							justifyContent: "center",
						}}
					>
						<Button
							containerStyle={{ width: 100, marginHorizontal: 4 }}
							titleStyle={{ alignText: "center" }}
							buttonStyle={{ backgroundColor: "#4d4dd1" }}
							title="Save"
							onPress={() => setModalVisible(!modalVisible)}
						/>
						<Button
							containerStyle={{ width: 100, marginHorizontal: 4 }}
							titleStyle={{ alignText: "center" }}
							buttonStyle={{ backgroundColor: "#4d4dd1" }}
							title="Close"
							onPress={() => setModalVisible(!modalVisible)}
						/>
					</View>
				</KeyboardAvoidingView>
			</Gradient>
		</Modal>
	);
};
const styles = StyleSheet.create({
	modalView: {
		borderRadius: 1,

		padding: 35,
		alignItems: "center",
		justifyContent: "center",

		shadowColor: "black",
		shadowOffset: {
			width: 0,
			height: 1,
		},
		elevation: 5,
	},

	calendarBoxContainerStyle: {
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
	},
	formContainerStyle: {
		height: 500,
		marginTop: 8,
		width: 300,
		flexDirection: "column",
		alignItems: "center",
		zIndex: 0,
	},
	closeBtn: {},
});
export default ItemAddModal;
