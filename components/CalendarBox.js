import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Calendar } from 'react-native-calendars'
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';

const CalendarBox = ({ todayDate }) => {
    const [isCalOpen, setIsCalOpen] = useState(false)
    const [selectedDateObj, setSelectedDateObj] = useState(null)
    const [selectedDate, setSelectedDate] = useState(null)

    useEffect(() => {
        // params - date : string
        // return - formattedDate : string
        function formatDate(date) {
            const mm = date.substring(0, 4)
            const dd = date.substring(5, 7)
            const yyyy = date.substring(8)

            const formattedDate = `${mm}/${dd}/${yyyy}`
            return formattedDate
        }

        setSelectedDate(formatDate(selectedDateObj ? Object.keys(selectedDateObj)[0] : '2021-12-25'))
    }, [selectedDateObj])


    function onDayPressHandler(day) {
        const dateString = day['dateString']
        const newDateObj = {}
        newDateObj[dateString] = { selected: true, marked: true, selectedColor: 'blue' }
        setSelectedDateObj(newDateObj)
        setIsCalOpen(prev => !prev)
    }
    function onPressHandler() {
        setIsCalOpen(prev => !prev)
    }
    return (
        <>
            <View >
                <Button
                    buttonStyle={{ borderColor: 'white' }}
                    titleStyle={{ color: 'white', fontSize: 20 }}
                    title={selectedDate}
                    onPress={onPressHandler}
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

