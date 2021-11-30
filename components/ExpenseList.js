import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'

const ExpenseList = ({ sevenDayExpenses }) => {
    const { expenseDetail, expenseDate, text, weekText, row, expenseList, expenseContainer, elevation } = styles
    console.log(sevenDayExpenses)
    return (
        < >
            <Text style={[weekText, text]}> Week 1 </Text>
            <ScrollView style={expenseList} contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }} nestedScrollEnabled={true}>
                {sevenDayExpenses.map(((dayExpense, i) => {
                    return (
                        <>
                            <Text key={i} style={[text, expenseDate]}> {dayExpense.date} </Text>
                            {dayExpense.expenses.map((expense, i) => {
                                return (
                                    <View key={i} style={[row, elevation]}>
                                        <Text style={[text, expenseDetail]}>{expense.description}</Text>
                                        <Text style={[text, expenseDetail]}>{`$${expense.price}`}</Text>
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
    weekText: {
        fontSize: 30,
        fontWeight: '800',
    },
    text: {
        textAlign: 'center',
        color: 'white'

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
        height: '60%',


        borderColor: 'white',
        borderStyle: 'solid',
        borderWidth: 0.1,

        elevation: 1,
        shadowColor: 'white'

    }
})
export default ExpenseList