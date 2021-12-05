import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	Modal,
	Pressable,
} from "react-native";

import Layout from "./components/Layout";
import ItemsList from "./components/ItemsList";
import Budget from "./components/Budget";
import DateBar from "./components/DateBar";
import ItemAddModal from "./components/ItemAdd/ItemAddModal";
import ItemAddBtn from "./components/ItemAdd/ItemAddBtn";
import { SafeAreaProvider } from "react-native-safe-area-context";
import mockData from "./mockData";

const App = () => {
	const [sevenDayItems, setSevenDayItems] = useState(null);
	const [modalVisible, setModalVisible] = useState(false);

	useEffect(() => {
		console.log("useEffect");
		setSevenDayItems(mockData.sevenDayItems);
	}, []);

	return (
		<SafeAreaProvider>
			<Layout style={styles.app}>
				<StatusBar style="auto" />
				<View style={styles.header}>
					<View style={[styles.dateBarContainer, styles.container]}>
						<DateBar />
					</View>

					<ItemAddModal
						modalVisible={modalVisible}
						setModalVisible={setModalVisible}
					/>

					<View
						style={[styles.itemAddBtnContainer, styles.container]}
					>
						<ItemAddBtn setModalVisible={setModalVisible} />
					</View>

					<View style={[styles.budgetContainer, styles.container]}>
						<Budget />
					</View>
				</View>
				{console.log("itemsList")}
				<View style={styles.itemsList}>
					<ItemsList sevenDayItems={sevenDayItems} />
				</View>
			</Layout>
		</SafeAreaProvider>
	);
};

const styles = StyleSheet.create({
	app: {
		flex: 1,
	},

	header: {
		// backgroundColor: 'green',
		flex: 1,
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
	container: {
		justifyContent: "center",
		alignItems: "center",
	},
	dateBarContainer: {
		// backgroundColor: 'red'
		height: 80,
	},
	itemAddBtnContainer: {
		// backgroundColor: 'blue',
		width: 30,
		height: 30,
		marginBottom: 20,
	},
	budgetContainer: {
		// backgroundColor: 'purple',
		width: 360,
		minHeight: 60,
		justifyContent: "center",
		alignItems: "center",
	},
	itemsList: {
		flex: 1.5,
		width: "100%",
	},
});

export default App;
