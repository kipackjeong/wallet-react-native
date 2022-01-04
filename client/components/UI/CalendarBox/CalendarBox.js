import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Calendar } from "react-native-calendars";
import { Button } from "react-native-elements";

import globalStyles, { theme, colors } from "../../../styles/globalStyles";
import mockData from "../../../mockData";
import Gradient from "../Gradient";
import useCalendarBox from "./useCalendarBox";

/*
CalendarBox
states - isCalOpen, selectedDateObj, selectedDate
handlers - onDateChangeHandler , onPressHandler
*/
const CalendarBox = ({
	visible,
	onCalendarBtnPress,
	onDateChange,
	containerStyle,
	calendarStyle,
}) => {
	const { isCalOpen, selectedDateObj, selectedDate, dispatch } =
		useCalendarBox();
	// set the Calendar's markedDates = newDateObj -> selectedDateObj.
	// close modal , set isCalOpen to false
	function onDateChangeHandler(day) {
		dispatch({ type: "SELECT_DATE", value: day });
	}

	useEffect(() => {
		if (onDateChange) {
			onDateChange(selectedDate);
			console.log(` CalendarBox - useEffect()`);
		}
	}, [selectedDate]);

	// toggle Calendar
	function onCalendarPressHandler() {
		// console.log('CalendarBox -> onPressHandler')
		dispatch({ type: "CONTROL_CAL" });
		if (onCalendarBtnPress) {
			onCalendarBtnPress();
		}
	}
	return (
		<>
			{visible && (
				<View
					style={[
						containerStyle,
						isCalOpen && { height: "50%", elevation: 20 },
					]}
				>
					<Gradient
						color={theme}
						style={{
							width: "100%",
						}}
					>
						<Button
							containerStyle={[
								styles.container,
								styles.btnContainer,
							]}
							buttonStyle={styles.btnStyle}
							titleStyle={styles.btnTitleStyle}
							title={selectedDate}
							onPress={onCalendarPressHandler}
						/>
					</Gradient>

					{isCalOpen ? (
						<View style={[styles.calContainer, styles.container]}>
							<Calendar
								markedDates={selectedDateObj}
								onDayPress={onDateChangeHandler}
								horizontal={true}
								style={{
									width: 360,
									elevation: 15,
									zIndex: 20,
								}}
							/>
						</View>
					) : null}
				</View>
			)}
		</>
	);
};
const styles = StyleSheet.create({
	container: {},

	btnStyle: {
		backgroundColor: "transparent",
	},
	btnTitleStyle: {
		fontSize: 25,
	},
	calContainer: {
		position: "absolute",
		top: 50,
	},
});

export default CalendarBox;
