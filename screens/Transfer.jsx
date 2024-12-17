import { SafeAreaView, StyleSheet, View, KeyboardAvoidingView, ScrollView, Platform, Text, TextInput } from "react-native";
import { useState } from "react";
import BasicHeader from "../components/BasicHeader";
import AmountCardField from "../components/AmountCardField";
import CustomButton from "../components/CustomButton";

export default function Transfer() {

    const formatNominal = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    };

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
                        style={{fontSize: 18, color: '#FFFFFF', height:'100%'}}
                        placeholder="Input account destination here"
                        keyboardType="numeric"
                    />
                </View>
                <ScrollView
                    contentContainerStyle={styles.scrollContainer}
                    keyboardShouldPersistTaps="handled"
                >

                    <AmountCardField currency="IDR" keyboardType='numeric' placeholder='XXX.XXX.XXX' label='Amount'/>
                    <View style={styles.balanceContainer}>
                        <Text>Balance</Text>
                        <Text style={{color: '#19918F'}}>IDR {formatNominal(10000000000)}</Text>
                    </View>
                    <AmountCardField placeholder='Write a note here' label='Notes'/>
                </ScrollView>

                <CustomButton
                    title='Transfer'
                    onPress={() => {}}
                />


            </KeyboardAvoidingView>
        </SafeAreaView>
    )
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