import { SafeAreaView, StyleSheet, View, KeyboardAvoidingView, ScrollView, Platform, Alert } from "react-native";
import { useState } from "react";
import RNPickerSelect from "react-native-picker-select";
import BasicHeader from "../components/BasicHeader";
import AmountCardField from "../components/AmountCardField";
import { MaterialIcons } from "@expo/vector-icons";
import CustomButton from "../components/CustomButton";
import { makeTransaction } from "../api/restApi";
import { useAuth } from "../context/AuthContext";
import { CommonActions } from '@react-navigation/native';

export default function TopUp({ navigation }) {
    const [valueOption, setValueOption] = useState('');
    const [amount, setAmount] = useState(0);
    const [notes, setNotes] = useState('');
    const { user } = useAuth()
    const options = [
        { label: "BSI", value: "BSI" },
        { label: "BCA", value: "BCA" },
        { label: "BNI", value: "BNI" },
        { label: "Jago", value: "Jago" }
    ];



    const handleTopUp = async () => {
        const datas = {
            type: 'c',
            from_to: valueOption,
            amount: amount,
            description: notes
        }
        try {
            const res = await makeTransaction(datas, user.token)
            Alert.alert('Success')
            navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [{ name: 'Dashboard' }]
                })
            )
        } catch (e) {
            console.log(user.token)
            Alert.alert('Failed: ' + e.message + user.token)
        }
    }

    const handleTextChange = (inputText) => {
        const parsedInt = parseInt(inputText, 10);
        if (!isNaN(parsedInt)) {
            setAmount(parsedInt);
        } else {
            setAmount(0);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <BasicHeader headerName={"Top Up"} />
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.keyboardAvoidingView}
            >
                <ScrollView
                    contentContainerStyle={styles.scrollContainer}
                    keyboardShouldPersistTaps="handled"
                >

                    <AmountCardField currency="IDR" keyboardType='numeric' placeholder='XXX.XXX.XXX' label='Amount' onChangeText={(inputText) => {
                        handleTextChange(inputText); // Update integer value
                    }} />

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
                    <AmountCardField placeholder='Write a note here' label='Notes' onChangeText={setNotes} />
                </ScrollView>
                <View style={styles.buttonContainer}>
                    <CustomButton
                        title='Top Up'
                        onPress={handleTopUp}
                    />
                </View>
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
    buttonContainer: {
        width: '100%',
        alignItems: 'center'
    }
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
        paddingRight: 30
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 4,
        color: "black",
        paddingRight: 30
    },
});
