import React, { useState } from 'react'
import { View, StyleSheet, Text, Modal, Pressable, TextInput, } from 'react-native'
import { Calendar } from 'react-native-calendars';
import CalendarBox from './CalendarBox';
import Gradient from './Gradient';

const AddExpenseModal = ({ modalVisible, setModalVisible }) => {

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}
        >
            <Gradient style={{ opacity: 0.97 }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={styles.calendarBoxContainer}>
                            <CalendarBox />
                        </View>

                        <TextInput style={styles.textInput} placeholder='Category'></TextInput>
                        <TextInput style={styles.textInput} placeholder='Description'></TextInput>
                        <TextInput style={styles.textInput} placeholder='Cost' keyboardType='number-pad'></TextInput>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={{ fontSize: 20, color: 'white' }}>Close</Text>
                        </Pressable>
                    </View>
                </View>
            </Gradient>

        </Modal>
    )
}
const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        height: '100%',
        width: '100%',

        margin: 20,
        borderRadius: 1,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1
        },
        elevation: 2
    },
    textInput: {
        height: 40,
        width: 300,
        margin: 12,
        elevation: 1,

        padding: 10,

        fontSize: 20,

        color: 'white'
    },
    calendarBoxContainer: {
        width: 300
    }

})
export default AddExpenseModal