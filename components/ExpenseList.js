import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'

const ExpenseList = ({ sevenDayExpenses }) => {
    return (
        <>
            <Text style={[styles.weekText, styles.text]}> Week 1 </Text>
            <ScrollView style={styles.expenseList} contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }} nestedScrollEnabled={true}>
                {sevenDayExpenses.map(((dayExpense, i) => {
                    return (
                        <>
                            <Text key={Math.random()} style={[styles.text, styles.expenseDate]}> {dayExpense.date} </Text>
                            {dayExpense.expenses.map((expense, j) => {
                                return (
                                    <View key={`${expense.description}${j}`} style={[styles.row, styles.elevation]}>
                                        <Text key={Math.random()} style={[styles.text, styles.expenseDetail]}>{expense.description}</Text>
                                        <Text key={Math.random()} style={[styles.text, styles.expenseDetail]}>{`$${expense.price}`}</Text>
                                    </View>
                                )
                            })}
                        </>
                    )
                }))}
            </ScrollView>
        </>

    )
}
const styles = StyleSheet.create({
    expenseDetail: {
        flex: 1,
        fontSize: 20
    },
    expenseDate: {
        flex: 1,
        fontSize: 25,
    },
    text: {
        textAlign: 'center',
        color: 'white'
    },
    weekText: {
        fontSize: 30,
        fontWeight: '800',
    },
    row: {
        width: '100%',
        flexDirection: 'row',
        paddingBottom: 1,

        borderBottomWidth: 0.1,

        // elevation: 12,
        // shadowColor: 'white'
    },
    elevation: {
        shadowColor: 'white'
    },

    expenseList: {
        width: '100%',



        borderColor: 'white',
        borderStyle: 'solid',
        borderWidth: 0.1,

        elevation: 1,
        shadowColor: 'white'

    }
})
export default ExpenseList