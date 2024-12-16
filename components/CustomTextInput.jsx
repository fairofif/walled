import React, { useState } from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";

const CustomTextInput = ({
    placeholder,
    value,
    onChangeText,
    secureTextEntry = false,
    keyboardType = "default",
    error,
}) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <View
            style={[
                styles.container,
                error && styles.inputError,
                isFocused && styles.focusedContainer,
            ]}
        >
            <TextInput
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                keyboardType={keyboardType}
                style={styles.input}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
            {error && <Text style={styles.error}>{error}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "94%",
        height: "40%",
        backgroundColor: "#FAFBFD",
        borderRadius: 20,
        justifyContent: "center",
        paddingHorizontal: 20,
        opacity: 0.5,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    focusedContainer: {
        opacity: 1,
        shadowOpacity: 0.25
    },
    input: {
        fontSize: 18,
        color: "#333"
    },
    inputError: {
        borderColor: '#ff6b6b',
        borderWidth: 1
    },
    error: {
        color: '#ff6b6b',
        fontSize: 12,
        marginTop: 4
    }
});

export default CustomTextInput;
