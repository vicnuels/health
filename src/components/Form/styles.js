import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    formContent: {
        flex: 1,
        bottom: 0,
        backgroundColor: "#ffffff",
        alignItems: "center",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingTop: 15,
        marginTop: 20,
    },
    form: {
        width: "100%",
        height: "auto",
        marginTop: 20,
        padding: 10,
    },
    formLabel: {
        color: "#000000",
        fontSize: 18,
        paddingLeft: 20,
    },
    formInput: {
        width: "90%",
        borderRadius: 50,
        backgroundColor: "#f6f6f6",
        height: 40,
        margin: 12,
        paddingLeft: 10,
    },
    buttonCalculator: {
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        width: "80%",
        backgroundColor: "#ff0043",
        paddingTop: 10,
        paddingBottom: 10,
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 40,
    },
    textButtonCalculator: {
        fontSize: 20,
        color: "#fff",
    },
    errorMessage: {
        fontSize: 12,
        color: "red",
        fontWeight: "bold",
        paddingLeft: 20,

    },
    exhibitionResultImc: {
        width: "100%",
        height: "60%",
        marginTop: 30,
    }
})

export default styles