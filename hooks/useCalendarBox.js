import React, { useState, useEffect, useReducer } from 'react'
function reducer(states, action) {
    switch (action.type) {
        case 'SELECT_DATE':
            const day = action.value
            const dateString = day['dateString']

            const newDateObj = {}
            newDateObj[dateString] = { selected: true, marked: true, selectedColor: 'blue' }
            return { ...states, selectedDateObj: newDateObj }
        case 'CONTROL_CAL':
            return { ...states, isCalOpen: true }
        case 'CHANGE_DATE_STRING':
            return { ...states, selectedDate: action.value }
        default:
            return states
    }
}

const useCalendarBox = () => {
    const [states, dispatch] = useReducer(reducer, {
        isCalOpen: false,
        selectedDateObj: null,
        selectedDate: ''
    })

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
        dispatch({
            type: "CHANGE_DATE_STRING",
            value: formatDate(states.selectedDateObj ? Object.keys(states.selectedDateObj)[0] : '2021-12-25')
        })

    }, [states.selectedDateObj])




    return { isCalOpen: states.isCalOpen, selectedDateObj: states.selectedDateObj, selectedDate: states.selectedDate, dispatch }
}

export default useCalendarBox