import { View, StyleSheet, Text } from "react-native";

const Account = ({number}) => {
    return (
        <View style={styles.card}>
            <View style={styles.labelContainer}>
                <Text style={styles.label}>Account No.</Text>
            </View>
            <View style={styles.accountContainer}>
                <Text style={styles.account}>{number}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#19918F',
        height: '16%',
        width: '94%',
        borderRadius: 12,
        flexDirection: 'row'
    },
    labelContainer: {
        width: '40%',
        justifyContent: 'center',
        paddingLeft: 20
    },
    label: {
        color: '#FFFFFF',
        fontSize: 17,
        fontWeight: 400
    },
    accountContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingRight: 20
    },
    account: {
        color: '#FFFFFF',
        fontSize: 17,
        fontWeight: 700
    }
})

export default Account;