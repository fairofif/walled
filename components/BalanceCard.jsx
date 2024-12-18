import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { useState } from "react";

const BalanceCard = ({ balance, onPressTopUp, onPressTransfer }) => {
    const [isHidden, setIsHidden] = useState(false);

    const toggleBalanceVisibility = () => {
        setIsHidden((prev) => !prev);
    };

    const formatNominal = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    };

    return (
        <View style={styles.container}>
            <View style={styles.balanceContainer}>
                <View>
                    <Text style={styles.label}>Balance</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={styles.balance}>
                        {isHidden ? 'Rp. ***' : `Rp. ${(formatNominal(balance))}`}
                    </Text>
                    <TouchableOpacity
                        style={styles.eyeButtonContainer}
                        onPress={toggleBalanceVisibility}
                    >
                        <Image
                            style={styles.eye}
                            source={
                                isHidden
                                    ? require('../assets/icons/eye-closed.png')
                                    : require('../assets/icons/eye.png')
                            }
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={onPressTopUp} style={styles.button}>
                    <Image  style={{height:'45%', width: '45%'}} source={require('../assets/icons/plus.png')}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={onPressTransfer} style={styles.button}>
                    <Image style={{height:'45%', width: '45%'}} source={require('../assets/icons/plane.png')}/>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '38%',
        flexDirection: 'row',
    },
    balanceContainer: {
        width: '70%',
        paddingLeft: 20,
        paddingRight: 40,
        justifyContent: 'center',
    },
    buttonContainer: {
        width: '30%',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    label: {
        fontSize: 15,
        fontWeight: '400',
    },
    balance: {
        fontSize: 25,
        fontWeight: '600',
    },
    eyeButtonContainer: {
        justifyContent: 'center',
        marginLeft: 10,
    },
    eye: {
        height: 12,
        width: 20,
    },
    button: {
        width: 45,
        height: 45,
        backgroundColor: "#19918F",
        borderRadius: 12,
        shadowColor: '#19918F',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default BalanceCard;
