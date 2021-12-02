import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Modal, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Layout from './components/Layout';
import ExpenseList from './components/ExpenseList'
import Budget from './components/Budget';
import DateBar from './components/DateBar'
import AddExpenseModal from './components/AddExpenseModal';
import AddExpenseBtn from './components/AddExpenseBtn';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import mockData from './mockData'


export default function App() {
    const [expenses, setExpenses] = useState(mockData.sevenDayExpenses)
    const [modalVisible, setModalVisible] = useState(false)
    return (
        <SafeAreaProvider>
            <Layout style={styles.app}>
                <StatusBar style="auto" />
                <View style={styles.header}>
                    <View >
                        <DateBar />
                    </View>
                    <View>
                        <AddExpenseModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
                    </View>
                    <View>
                        <AddExpenseBtn setModalVisible={setModalVisible} />
                    </View>
                    <View>
                        <Budget />
                    </View>

                </View>
                <View style={styles.expenseList}>
                    <ExpenseList sevenDayExpenses={expenses} />
                </View>
            </Layout >
        </SafeAreaProvider>



    );
}

const styles = StyleSheet.create({
    app: {
        flex: 1,
    },

    header: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    expenseList: {
        flex: 1,
        width: '100%',
    },
});
