import React from "react"
import { StyleSheet, Text, View, Share, TouchableOpacity } from "react-native"

import styles from "./styles"

export default function ResultImc({ messageImc, resultImc }) {
    const onShare = async () => {
        const result = await Share.share({
            message: "Meu IMC hoje é: " + resultImc
        })
    }

    return (
        <View style={styles.resultImc}>
            <Text style={styles.information}>{messageImc}</Text>
            <Text style={styles.numberImc}>{resultImc}</Text>

            {
                resultImc &&
                (<TouchableOpacity style={styles.shared} onPress={onShare}>
                    <Text style={styles.sharedText}>Compartilhar</Text>
                </TouchableOpacity>)
            }
        </View>
    )
}