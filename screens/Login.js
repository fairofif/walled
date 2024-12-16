import React, { useState } from "react";
import { Button, Text, SafeAreaView, View, StyleSheet, Image } from "react-native";
import CustomTextInput from '../components/CustomTextInput'
import CustomButton from "../components/CustomButton";
import QuestionButton from "../components/QuestionButton"

export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const handleLogin = () => {
        let validationErrors = {};

        if (!email.includes('@')) {
            validationErrors.email = 'Please enter a valid email address';
        }
        if (password.length < 6) {
            validationErrors.password = 'Password must be at least 6 characters long';
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            navigation.replace('Dashboard'); // Proceed to the next screen
        }
    };

    const handleRegister = () => {
        navigation.navigate('Register');
    }

    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.logo} source={require('../assets/logo.png')} />
            <View style={styles.fieldContainer}>
                <CustomTextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    secureTextEntry={false}
                    error={errors.email}
                />
                <CustomTextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    error={errors.password}
                />
            </View>
            <View style={styles.buttonGroupContainer}>
                <CustomButton
                    title='Login'
                    onPress={handleLogin}
                />
                <QuestionButton
                    text="Don't have account?"
                    title="Register"
                    onPress={handleRegister}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    logo: {
        marginTop: '15%',
        width: '250',
        height: '125',
        resizeMode: 'contain'
    },
    fieldContainer: {
        width: '100%',
        height: '20%',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: '40%'
    },
    buttonGroupContainer: {
        width: '100%',
        height: '20%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10%'
    },
    questionContainer: {
        width: '92%',
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    question: {
        fontSize: 15
    },
    register: {

    }
})