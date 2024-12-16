import React, { useState, useEffect } from "react";
import {
    Button,
    Text,
    SafeAreaView,
    View,
    StyleSheet,
    Image,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Keyboard,
} from "react-native";
import CustomTextInput from "../components/CustomTextInput";
import CustomButton from "../components/CustomButton";
import QuestionButton from "../components/QuestionButton";

export default function Register({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fullName, setFullName] = useState("");
    const [avatarUri, setAvatarUri] = useState("");
    const [errors, setErrors] = useState({});
    const [showLogo, setShowLogo] = useState(true);

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

    const handleRegister = () => {
        // Registration logic here
    };

    const handleLogin = () => {
        navigation.goBack(null);
    };

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
                            placeholder="Fullname"
                            value={fullName}
                            onChangeText={setFullName}
                            error={errors.fullName}
                        />
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
                        <CustomTextInput
                            placeholder="Avatar Url"
                            value={avatarUri}
                            onChangeText={setAvatarUri}
                            error={errors.avatarUri}
                        />
                    </View>
                    <View style={styles.buttonGroupContainer}>
                        <CustomButton title="Register" onPress={handleRegister} />
                        <QuestionButton
                            text="Have an account?"
                            title="Login here"
                            onPress={handleLogin}
                        />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
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
        justifyContent: "space-around",
    },
    logo: {
        width: 250,
        height: 125,
        resizeMode: "contain",
    },
    fieldContainer: {
        width: "100%",
        height: "40%",
        alignItems: "center",
        justifyContent: "space-around",
    },
    fieldContainerType: {
        width: "100%",
        height: "60%",
        alignItems: "center",
        justifyContent: "space-around",
    },
    buttonGroupContainer: {
        width: "100%",
        height: "20%",
        justifyContent: "center",
        alignItems: "center",
    },
});
