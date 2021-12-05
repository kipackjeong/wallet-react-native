import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'

/*
    Parent : App
*/
const ItemsList = ({ sevenDayItems }) => {
    if (!sevenDayItems) {
        return (
            <View style={{ flex: 1 }}>

                <Text > Loading... </Text>
            </View>
        )
    } else {
        return (
            <>
                <Text style={[styles.weekText, styles.text]}> Week 1 </Text>
                <ScrollView style={styles.expenseList} contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }} nestedScrollEnabled={true}>

                    {sevenDayItems.map((dayItems, i) => {

                        return (
                            <>
                                <Text key={Math.random()} style={[styles.text, styles.expenseDate]}> {dayItems.date} </Text>
                                {console.log(dayItems)}
                                {dayItems.items.map((item, j) => {
                                    return (
                                        <View key={`${item.description}${j} ${Math.random()}`} style={[styles.row, styles.elevation]}>
                                            <Text key={Math.random()} style={[styles.text, styles.expenseDetail]}>{item.description}</Text>
                                            <Text key={Math.random()} style={[styles.text, styles.expenseDetail]}>{`$${item.price}`}</Text>
                                        </View>
                                    )
                                })}
                            </>
                        )
                    })}
                </ScrollView>
            </>)
    }



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
        color: 'black'
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

    itemList: {
        width: '100%',



        borderColor: 'black',
        borderStyle: 'solid',
        borderWidth: 0.1,

        elevation: 1,
        shadowColor: 'black'

    }
})
export default ItemsList