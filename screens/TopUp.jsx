import { SafeAreaView, StyleSheet, View, KeyboardAvoidingView, ScrollView, Platform } from "react-native";
import { useState } from "react";
import RNPickerSelect from "react-native-picker-select";
import BasicHeader from "../components/BasicHeader";
import AmountCardField from "../components/AmountCardField";
import { MaterialIcons } from "@expo/vector-icons"; // Import Material Icons

export default function TopUp() {
    const [valueOption, setValueOption] = useState('');
    const options = [
        { label: "Item 1", value: "1" },
        { label: "Item 2", value: "2" },
        { label: "Item 3", value: "3" },
        { label: "Item 4", value: "4" },
        { label: "Item 5", value: "5" },
        { label: "Item 6", value: "6" },
        { label: "Item 7", value: "7" },
        { label: "Item 8", value: "8" },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.keyboardAvoidingView}
            >
                <ScrollView
                    contentContainerStyle={styles.scrollContainer}
                    keyboardShouldPersistTaps="handled"
                >
                    <BasicHeader headerName={"Top Up"} />
                    <AmountCardField currency="IDR" keyboardType='numeric' placeholder='XXX.XXX.XXX' label='Amount'/>

                    <View style={styles.dropdownContainer}>
                        <RNPickerSelect
                            onValueChange={(value) => setValueOption(value)}
                            items={options}
                            style={pickerSelectStyles}
                            placeholder={{
                                label: "Select an option...",
                                value: '',
                            }}
                            value={valueOption}
                            Icon={() => (
                                <View style={styles.iconContainer}>
                                    <MaterialIcons name="arrow-drop-down" size={24} color="gray" />
                                </View>
                            )}
                        />
                    </View>
                    <AmountCardField placeholder='Write a note here' label='Notes'/>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
    keyboardAvoidingView: {
        flex: 1,
    },
    scrollContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
    },
    dropdownContainer: {
        width: "90%",
        marginTop: 20,
    },
    iconContainer: {
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 4,
        color: "black",
        paddingRight: 30, // to ensure the text is not overlapping with the dropdown icon
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 4,
        color: "black",
        paddingRight: 30, // to ensure the text is not overlapping with the dropdown icon
    },
});
