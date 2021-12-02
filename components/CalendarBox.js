import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Calendar } from 'react-native-calendars'
import { Button } from 'react-native-elements';
import useCalendarBox from '../hooks/useCalendarBox';

/*
CalendarBox
parent - AddExpenseModal
child - Calendar, Button
states - isCalOpen, selectedDateObj, selectedDate
handlers - onDayPressHandler , onPressHandler

*/
const CalendarBox = ({ todayDate }) => {
    const { isCalOpen, selectedDateObj, selectedDate, dispatch } = useCalendarBox()

    // set the Calendar's markedDates = newDateObj -> selectedDateObj.
    // set isCalOpen to close modal.
    function onDayPressHandler(day) {
        dispatch({ type: "SELECT_DATE", value: day })
    }

    function onPressHandler() {
        console.log('CalendarBox -> onPressHandler')
        dispatch({ type: 'CONTROL_CAL' })
    }
    return (
        <>
            <View >
                <Button
                    buttonStyle={{ borderColor: 'white' }}
                    titleStyle={{ color: 'pink', fontSize: 20 }}
                    title={selectedDate}
                    onPress={onPressHandler}
                    onPressIn={() => {
                        console.log('pressed')
                    }}
                    type='outline'
                />
            </View>


            {isCalOpen ?
                <Calendar
                    style={{
                        borderWidth: 1,
                        borderColor: 'gray',
                    }}
                    markedDates={selectedDateObj}
                    onDayPress={onDayPressHandler}
                    horizontal={true}
                />
                :
                null}
        </>



    )
}
const styles = StyleSheet.create({
    btnContainer: { width: 300 }
})

export default CalendarBox

