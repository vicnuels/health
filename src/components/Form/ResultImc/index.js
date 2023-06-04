import React from "react"
import { StyleSheet, Text, View } from "react-native"

export default function ResultImc({ messageImc, resultImc }) {
    return (
        <View>
            <Text>{messageImc}</Text>
            <Text>{resultImc}</Text>
        </View>
    )
}