import React from 'react'
import { View, ScrollView } from 'react-native'
import Gradient from './Gradient'
const Layout = ({ children, style }) => {
    return (
        <View style={style}>
            <Gradient>
                <ScrollView contentContainerStyle={{
                    flex: 1,
                    alignItems: 'center',
                }} nestedScrollEnabled={true}
                >
                    {children}
                </ScrollView >
            </Gradient>
        </View>
    )
}

export default Layout
