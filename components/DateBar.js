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
        height: 10,
        marginTop: 50,

        flex: 1,

        elevation: 20,
        shadowColor: 'white'
    },
    text: {
        fontSize: 32,
        fontWeight: '800',
        color: 'white'
    }
})

export default DateBar