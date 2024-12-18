import { Alert, SafeAreaView, StyleSheet, View, KeyboardAvoidingView, ScrollView, Platform, Text, TextInput, ActivityIndicator } from "react-native";
import { useState, useEffect } from "react";
import BasicHeader from "../components/BasicHeader";
import AmountCardField from "../components/AmountCardField";
import CustomButton from "../components/CustomButton";
import { useAuth } from "../context/AuthContext";
import { makeTransaction, getUserAuth } from "../api/restApi";
import { CommonActions } from '@react-navigation/native';

export default function Transfer({ navigation }) {

    const [userData, setUserData] = useState({});
    const [amount, setAmount] = useState(0);
    const [accountDestination, setAccountDestination] = useState("");
    const [notes, setNotes] = useState("");
    const [loading, setIsLoading] = useState(true);
    const { user } = useAuth();

    const formatNominal = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    };

    const getUser = async () => {
        try {
            const data = await getUserAuth(user.token);
            setUserData(data);
        } catch (e) {
            Alert.alert('Failed to retrieve user data: ' + e.message + user.token);
        } finally {
            setIsLoading(false)
        }
    };
    useEffect(() => {
        getUser();
    }, []);

    const handleTextChange = (inputText) => {
        const parsedInt = parseInt(inputText, 10);
        if (!isNaN(parsedInt)) {
            setAmount(parsedInt);
        } else {
            setAmount(0);
        }
    };

    const handleTransfer = async () => {
        const datas = {
            type: 'd',
            from_to: accountDestination,
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

    if (loading) {
        return (
            <ActivityIndicator
                size='large' color='#0000ff'
            />
        )
    } else {
        return (
            <SafeAreaView style={styles.container}>
                <BasicHeader headerName={"Transfer"} />
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={styles.keyboardAvoidingView}
                >
                    <View style={styles.inputAccountContainer}>
                        <Text style={styles.to}>To: </Text>
                        <TextInput
                            style={{ fontSize: 18, color: '#FFFFFF', height: '100%' }}
                            placeholder="Input account destination here"
                            keyboardType="numeric"
                            onChangeText={setAccountDestination}
                        />
                    </View>
                    <ScrollView
                        contentContainerStyle={styles.scrollContainer}
                        keyboardShouldPersistTaps="handled"
                    >

                        <AmountCardField currency="IDR" keyboardType='numeric' placeholder='XXX.XXX.XXX' label='Amount' onChangeText={(inputText) => {
                            handleTextChange(inputText);
                        }}
                        />
                        <View style={styles.balanceContainer}>
                            <Text>Balance</Text>
                            <Text style={{ color: '#19918F' }}>IDR {formatNominal(userData.balance)}</Text>
                        </View>
                        <AmountCardField placeholder='Write a note here' label='Notes' onChangeText={setNotes} />
                    </ScrollView>

                    <CustomButton
                        title='Transfer'
                        onPress={handleTransfer}
                    />


                </KeyboardAvoidingView>
            </SafeAreaView>
        )
    }



}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
    keyboardAvoidingView: {
        flex: 1,
        alignItems: 'center'
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
    inputAccountContainer: {
        backgroundColor: '#19918F',
        height: '8%',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: '5%'
    },
    to: {
        color: '#FFFFFF',
        fontSize: 18
    },
    balanceContainer: {
        flexDirection: 'row',
        width: '100%',
        paddingHorizontal: '5%',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});