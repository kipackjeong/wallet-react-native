import React from 'react'
import { StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

const Gradient = ({ children, style }) => {
    return (
        <LinearGradient colors={['black', '#07183d']} style={[styles.gradient, style]}>
            {children}
        </LinearGradient>
    )
}

export default Gradient


const styles = StyleSheet.create({
    gradient: {
        flex: 1
    },
})