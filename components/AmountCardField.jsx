import { StyleSheet, View, Text, TextInput } from "react-native";

export default function AmountCardField({currency, label, placeholder, keyboardType='default'}) {
    return (
        <View style={styles.container}>
            <View style={styles.labelContainer}>
                <Text style={styles.label}>{label}</Text>
            </View>
            <View style={styles.inputContainer}>
                <View style={styles.currencyContainer}>
                    <Text style={styles.currency}>{currency}</Text>
                </View>
                <TextInput style={styles.input} placeholder={placeholder} keyboardType={keyboardType}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '20%',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 30
    },
    labelContainer: {
        width: '100%',
        paddingHorizontal: '5%'
    },
    label: {
        color: '#B3B3B3',
        fontSize: 20
    },
    inputContainer: {
        width: '90%',
        height: '50%',
        borderBottomWidth: 1,
        borderColor: '#E1E1E1',
        flexDirection: 'row'
    },
    currencyContainer: {
        width: '15%',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    currency: {
        fontSize: 20
    },
    input: {
        fontSize: 35
    }
})