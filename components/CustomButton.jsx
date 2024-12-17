import { Text, StyleSheet, TouchableOpacity } from "react-native"

const CustomButton = ({
    title,
    onPress
}) => {
    return (
        <TouchableOpacity
            style={styles.button}
            title={title}
            onPress={onPress}
        >
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: '94%',
        height: 60,
        backgroundColor: '#19918F',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 700
    }
})

export default CustomButton