import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
const Budget = () => {
    return (
        <>
            <View style={[styles.row, styles.headRow]}>
                <Text style={[styles.title, styles.text]}>Budget</Text>
                <Text style={[styles.title, styles.text]}>Used</Text>
                <Text style={[styles.title, styles.text]}>Remain</Text>
            </View>
            <View style={styles.row
            }>
                <Text style={styles.text}> November</Text>
                <Text style={styles.text}> 1200</Text>
                <Text style={styles.text}> 850</Text>
                <Text style={styles.text}> 350</Text>
            </View>
            <View style={styles.row
            }>
                <Text style={styles.text}> Week1</Text>
                <Text style={styles.text}> 300</Text>
                <Text style={styles.text}> 200 </Text>
                <Text style={styles.text}> 350</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({

    headRow: {
        paddingLeft: 83,
    },
    row: {
        flexDirection: 'row',
    },
    title: {
        fontSize: 20
    },
    text: {
        width: 80,
        textAlign: 'center',
        lineHeight: 30,
        color: 'black',
    },

})

export default Budget