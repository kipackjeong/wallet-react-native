import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, Pressable, Image, Button } from 'react-native'

import plusIcon from '../assets/icons/plus-4-64.png'
const AddExpenseBtn = ({ setModalVisible }) => {

    function onPressHandler() {
        setModalVisible(true)
    }

    return (
        <Pressable
            style={({ pressed }) => [styles.button, { transform: pressed ? [{ scale: 1.1 }] : [] },]}
            onPress={onPressHandler}
        >
            <Image style={styles.icon} source={plusIcon}></Image>
        </Pressable>
    )

}

const styles = StyleSheet.create({
    button: {
        width: 40,
        height: 40,
        borderRadius: 50,
        elevation: 5,
        shadowColor: 'white',
        backgroundColor: 'white'
    },
    text: {
        flex: 1,
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    icon: {
        flex: 1,

        width: '100%',
        height: '100%'
    }
})

export default AddExpenseBtn