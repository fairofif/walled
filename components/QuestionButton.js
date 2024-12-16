import { StyleSheet, View, Text, TouchableOpacity } from "react-native"

const QuestionButton = ({text, title, onPress}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={styles.title}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        fontSize: 16
    },
    title: {
        fontSize: 16,
        color: '#19918F',
        fontWeight: 500,
        marginLeft: 4
    }
})

export default QuestionButton