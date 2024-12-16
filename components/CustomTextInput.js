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
    const [isFocused, setIsFocused] = useState(false); // Track focus state

    return (
        <View
            style={[
                styles.container,
                error && styles.inputError,
                isFocused && styles.focusedContainer, // Apply focus style dynamically
            ]}
        >
            <TextInput
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                keyboardType={keyboardType}
                style={styles.input}
                onFocus={() => setIsFocused(true)} // Set focus state to true
                onBlur={() => setIsFocused(false)} // Reset focus state
            />
            {error && <Text style={styles.error}>{error}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "94%",
        height: 50,
        backgroundColor: "#FAFBFD",
        borderRadius: 20,
        justifyContent: "center",
        paddingHorizontal: 20,
        opacity: 0.5, // Default dimmed state
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    focusedContainer: {
        opacity: 1, // Full opacity when focused
        shadowOpacity: 0.25, // Emphasize shadow
    },
    input: {
        fontSize: 18,
        color: "#333",
    },
    inputError: {
        borderColor: '#ff6b6b',
    },
    error: {
        color: '#ff6b6b',
        fontSize: 12,
        marginTop: 4,
    },
});

export default CustomTextInput;
