import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";

const HistoryCard = ({ avaUri, name, kind, date, nominal }) => {
    // Utility function to format number with dots
    const formatNominal = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    };

    return (
        <TouchableOpacity style={styles.card}>
            <View style={{ width: '25%', justifyContent: 'center', alignItems: 'center' }}>
                <Image source={{ uri: avaUri }} style={styles.ava} />
            </View>
            <View style={{ width: '35%', justifyContent: 'space-evenly', paddingTop: 8, paddingBottom: 8 }}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.kind}>{kind}</Text>
                <Text style={styles.date}>{date}</Text>
            </View>
            <View style={styles.nominalContainer}>
                {/* Nominal with color and formatted value */}
                <Text
                    style={[
                        styles.nominal,
                        { color: kind === 'Transfer' ? 'red' : 'green' } // Conditional color
                    ]}
                >
                    {kind === 'Transfer' ? '-' : '+'} {formatNominal(nominal)}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        width: '100%',
        height: 80,
        paddingLeft: 12,
        paddingRight: 12,
        flexDirection: 'row',
        marginBottom: 6
    },
    nominalContainer: {
        width: '40%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    ava: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderColor: 'lightblue',
        borderWidth: 4,
    },
    name: {
        fontSize: 22,
        fontWeight: '600'
    },
    kind: {
        fontWeight: '500'
    },
    date: {
        fontWeight: '200'
    },
    nominal: {
        fontSize: 20
    }
});

export default HistoryCard;
