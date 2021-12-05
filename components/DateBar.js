import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const DateBar = () => {
    const { text, dateBar } = styles
    return (
        <View style={dateBar}>
            <Text style={text}> 29 Nov 2021</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    dateBar: {
        flex: 0.5,
        textAlign: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 32,
        fontWeight: '800',
        color: 'black'
    }
})

export default DateBar