import React, { useState } from "react"
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from "react-native"
import ResultImc from "./ResultImc"

import styles from "./styles"

export default function Form() {

    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState("Preencha o peso e altura")
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")

    function imcCalculator() {
        return setImc((weight / (height * height)).toFixed(2))
    }

    function validationImc() {
        if (weight != null && height != null) {
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageImc("Seu IMC é igual:")
            setTextButton("Calcular Novamente")
            return
        }
        setImc(null)
        setTextButton("Calcular")
        setMessageImc("Preencha o peso e altura")
    }

    return (
        <View style={styles.formContent}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <TextInput
                    style={styles.formInput}
                    placeholder="Ex: 1.75"
                    keyboardType="numeric"
                    onChangeText={setHeight}
                    value={height}
                />
                <Text style={styles.formLabel}>Peso</Text>
                <TextInput
                    style={styles.formInput}
                    placeholder="Ex: 75.45"
                    keyboardType="numeric"
                    onChangeText={setWeight}
                    value={weight}
                />

                {/*  <Button
                    title={textButton}
                    onPress={() => {
                        validationImc()
                    }}
                /> */}

                <TouchableOpacity
                    style={styles.buttonCalculator}
                    onPress={() => {
                        validationImc()
                    }}
                >
                    <Text style={styles.textButtonCalculator}>{textButton}</Text>
                </TouchableOpacity>
            </View>

            <ResultImc
                messageImc={messageImc}
                resultImc={imc}
            />
        </View>
    )
}