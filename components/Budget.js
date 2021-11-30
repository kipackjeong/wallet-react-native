import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
const Budget = () => {
    return (
        <View style={styles.budget}>
            <View style={[styles.row, styles.headRow]}>
                <Text style={[styles.title, styles.text]}>Budget</Text>
                <Text style={[styles.title, styles.text]}>Used</Text>
                <Text style={[styles.title, styles.text]}>Remain</Text>
            </View>
            <View style={styles.row
            }>
                <Text style={styles.text}> Nov</Text>
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
        </View>
    )
}

const styles = StyleSheet.create({

    budget: {
        height: 20,

        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
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
        color: 'white',
    },

})

export default Budget