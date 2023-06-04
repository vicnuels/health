import React from "react"
import { StyleSheet, Text, TextInput, View, Button } from "react-native"
import ResultImc from "./ResultImc"

export default function Form() {
    return (
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput
                    placeholder="Ex: 1.75"
                    keyboardType="numeric"
                />
                <Text>Peso</Text>
                <TextInput
                    placeholder="Ex: 75.45"
                    keyboardType="numeric"
                />

                <Button
                    title="Calcular IMC"
                />
            </View>

            <ResultImc
                messageImc="Normal"
                resultImc="20.00"
            />
        </View>
    )
}