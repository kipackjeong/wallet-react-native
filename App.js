import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Modal, Pressable } from 'react-native';
import ExpenseList from './components/ExpenseList'
import Budget from './components/Budget';
import DateBar from './components/DateBar'
import AddExpenseModal from './components/AddExpenseModal';
import { LinearGradient } from 'expo-linear-gradient';
import mockData from './mockData'

export default function App() {
    const [expenses, setExpenses] = useState(mockData.sevenDayExpenses)
    const [modalVisible, setModalVisible] = useState(false)
    return (
        <LinearGradient colors={['#07183d', '#2B1483']} style={styles.App}
        >
            <ScrollView style={styles.App} contentContainerStyle={{
                alignItems: 'center',
            }}
                nestedScrollEnabled={true}>


                <StatusBar style="auto" />
                <View style={{ flex: 1 }}>
                    <DateBar />
                    <AddExpenseModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
                </View>


                <Budget />
                <ExpenseList sevenDayExpenses={expenses} />

            </ScrollView >

        </LinearGradient >

    );
}

const styles = StyleSheet.create({
    App: {
        flex: 1,
    },



});
