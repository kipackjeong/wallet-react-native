import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { colors } from "../../styles/globalStyles";
import { Slider } from "react-native-elements";
import ItemAddBtn from "./ItemAddModal/ItemAddBtn";
import monthApi from "../../api/monthApi";
//#region UI
import CalendarBox from "../UI/CalendarBox/CalendarBox";
//#endregion

//#region containers
import BudgetContainer from "../../redux/containers/BudgetContainer";
import ItemsListContainer from "../../redux/containers/ItemsListContainer";
import ItemAddModalContainer from "../../redux/containers/ItemAddModalContainer";
import useTimer from "../../hooks/useTimer";
//#endregion

const Main = ({ loadFetchedData }) => {
	const [dataLoaded, setDataLoaded] = useState(false);
	useEffect(() => {
		const fetchAPI = async () => {
			const month = await monthApi.getOrCreateMonthByTodayDate();
			loadFetchedData(month);
			setDataLoaded(true);
		};

		fetchAPI();
	}, []);

	const [itemAddModalVisible, setItemAddModalVisible] = useState(false);
	const [calendarOpened, setCalendarOpened] = useState(false);
	const [itemAddBtnVisible, setItemAddBtnVisible] = useState(false);

	const { timer, timeIt } = useTimer();

	const hideCalendarBoxAndItemAddBtn = () => {
		setItemAddBtnVisible(false);
	};
	const onScreenTouchStart = async () => {
		setItemAddBtnVisible(true);
		timeIt();
	};

	useEffect(() => {
		if (!calendarOpened) {
			setItemAddBtnVisible(false);
		}
	}, [calendarOpened, timer]);

	const content = dataLoaded ? (
		<>
			<CalendarBox
				containerStyle={[
					styles.container,
					styles.calendarBoxContainerStyle,
					calendarOpened && { height: "50%" },
				]}
				visible={true}
				onCalendarBtnPress={hideCalendarBoxAndItemAddBtn}
				onDayPress={hideCalendarBoxAndItemAddBtn}
				setCalendarOpened={setCalendarOpened}
			/>

			<View style={styles.main} onTouchStart={onScreenTouchStart}>
				<View
					style={{
						width: "90%",
						backgroundColor: colors.blue,
						height: 50,
					}}
				></View>
				<BudgetContainer
					containerStyle={[styles.budgetContainer, styles.container]}
				/>

				<ItemAddBtn
					visible={itemAddBtnVisible}
					setItemAddModalVisible={setItemAddModalVisible}
					containerStyle={[
						styles.container,
						styles.itemAddBtnContainer,
					]}
				/>

				<ItemsListContainer
					containerStyle={[
						styles.container,
						styles.itemsListContainer,
					]}
				/>
				<ItemAddModalContainer
					itemAddModalVisible={itemAddModalVisible}
					setItemAddModalVisible={setItemAddModalVisible}
				/>
			</View>
		</>
	) : (
		<View>
			<Text>loading...</Text>
		</View>
	);
	return content;
};
const styles = StyleSheet.create({
	main: {
		width: "100%",
		marginTop: 10,
		flex: 1,
		flexDirection: "column",
		alignItems: "center",
	},
	container: {
		justifyContent: "center",
		alignItems: "center",
		width: "90%",

		elevation: 1,
	},
	calendarBoxContainerStyle: {
		height: 50,

		position: "absolute",
		top: 10,
		justifyContent: "flex-start",
		alignItems: "center",
		zIndex: 10,
	},
	budgetContainer: {},
	itemAddBtnContainer: {
		width: 45,
		height: 45,

		borderRadius: 50,
		position: "absolute",
		top: "30.5%",
		right: 20,
		zIndex: 30,
		borderWidth: 0,
	},
	itemsListContainer: {
		flex: 1,
	},
});

export default Main;
