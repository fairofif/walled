import React, { useState, useEffect } from "react";
import { SafeAreaView, View, StyleSheet, Image, KeyboardAvoidingView, Platform, ScrollView, Keyboard, Alert } from "react-native";
import CustomTextInput from '../components/CustomTextInput'
import CustomButton from "../components/CustomButton";
import QuestionButton from "../components/QuestionButton"
import { useAuth } from "../context/AuthContext";
import { login } from "../api/restApi";

export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [showLogo, setShowLogo] = useState(true);
    const { login: setLoginState } = useAuth();

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener("keyboardDidShow", () => {
            setShowLogo(false);
        });
        const keyboardDidHideListener = Keyboard.addListener("keyboardDidHide", () => {
            setShowLogo(true);
        });

        return () => {
            // Clean up listeners
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);

    const handleLogin = async () => {
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
            try {
                const userData = {
                    email: email,
                    password: password
                }
                const { token } = await login(userData)
                setLoginState(token)
                Alert.alert('Success')
            } catch (e) {
                Alert.alert('Failed')
            }
        }
    };

    const handleRegister = () => {
        navigation.navigate('Register');
    }

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
                    {showLogo && (
                        <Image style={styles.logo} source={require("../assets/logo.png")} />
                    )}
                    <View style={showLogo ? styles.fieldContainer : styles.fieldContainerType}>
                        <CustomTextInput
                            placeholder="Email"
                            value={email}
                            onChangeText={setEmail}
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
                        <CustomButton title="Login" onPress={handleLogin} />
                        <QuestionButton
                            text="Don't have account?"
                            title="Register"
                            onPress={handleRegister}
                        />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    keyboardAvoidingView: {
        flex: 1,
    },
    scrollContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'space-around'
    },
    logo: {
        // marginTop: '15%',
        width: '250',
        height: '125',
        resizeMode: 'contain'
    },
    fieldContainer: {
        width: '100%',
        height: '20%',
        alignItems: 'center',
        justifyContent: 'space-around',
        // marginTop: '40%'
    },
    fieldContainerType: {
        width: '100%',
        height: '30%',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: '30%'
    },
    buttonGroupContainer: {
        width: '100%',
        height: '20%',
        justifyContent: 'center',
        alignItems: 'center',
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