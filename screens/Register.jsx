import React, { useState, useEffect } from "react";
import {
    Text,
    SafeAreaView,
    View,
    StyleSheet,
    Image,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Keyboard,
    Modal,
    Pressable
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
    const [modalVisible, setModalVisible] = useState(false);

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
        let validationErrors = {};

        if (!email.includes('@')) {
            validationErrors.email = 'Please enter a valid email address';
        }
        if (!avatarUri.includes('http')) {
            validationErrors.avatarUri = 'Please enter a valid Url';
        }
        if (fullName.length == 0) {
            validationErrors.fullName = 'Please fill a name';
        }
        if (password.length < 6) {
            validationErrors.password = 'Password must be at least 6 characters long';
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            navigation.replace('Dashboard');
        }
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
                    <SafeAreaView style={styles.modalInitialContainer}>
                        <Text>I have read and agree to the </Text>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => {
                                Alert.alert('Modal has been closed.');
                                setModalVisible(!modalVisible);
                            }}>
                            <View style={styles.centeredView}>
                                <View style={styles.modalView}>
                                    <ScrollView>
                                        <Text style={styles.modalText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
                                    </ScrollView>
                                    <Pressable
                                        style={[styles.button, styles.buttonClose]}
                                        onPress={() => setModalVisible(!modalVisible)}>
                                        <Text style={styles.textStyle}>Oke bang ngerti!</Text>
                                    </Pressable>
                                </View>
                            </View>
                        </Modal>
                        <Pressable
                            onPress={() => setModalVisible(true)}>
                            <Text style={styles.textStyleOpen}>Terms and Conditions</Text>
                        </Pressable>
                    </SafeAreaView>
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
    modalInitialContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    modalView: {
        marginTop: 100,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height:  2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    textStyle: {
        color: '#FAFBFD'
    },
    textStyleOpen: {
        color: '#19918F'
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
    button: {
        marginTop: 30,
        backgroundColor: '#19918F',
        width: 150,
        height: 30,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
