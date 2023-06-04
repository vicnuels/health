import React from "react"
import { StyleSheet, Text, View } from "react-native"

import styles from "./styles"

export default function ResultImc({ messageImc, resultImc }) {
    return (
        <View style={styles.resultImc}>
            <Text style={styles.information}>{messageImc}</Text>
            <Text style={styles.numberImc}>{resultImc}</Text>
        </View>
    )
}