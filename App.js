import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import ExpenseList from './components/ExpenseList'
import Budget from './components/Budget';
import DateBar from './components/DateBar'
import mockData from './mockData'

export default function App() {
  const [expenses, setExpenses] = useState(mockData.sevenDayExpenses)



  return (
    <ScrollView style={styles.App} contentContainerStyle={{
      alignItems: 'center',
    }}
      nestedScrollEnabled={true}>
      <StatusBar style="auto" />
      <DateBar />
      <Budget />
      <ExpenseList sevenDayExpenses={expenses} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  App: {
    flex: 1,
    backgroundColor: '#07183d',
  },
});
