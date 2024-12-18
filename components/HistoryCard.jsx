import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";

const HistoryCard = ({ avaUri, name, kind, date, nominal }) => {
    const formatNominal = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    };

    const avaUriList = [
        'https://cdn.antaranews.com/cache/1200x800/2011/04/20110409022242sule-sutisna.jpg',
        'https://i1.sndcdn.com/artworks-000162081203-ppxkn6-t500x500.jpg',
        'https://images.bisnis.com/posts/2024/06/24/1776553/antarafoto-jokowi-hadiri-ktt-asean-australia-040324-adm-10_1709532261.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6ZwUH8UBp9WHUvdb6AxrlRWqfCr-u_fXQQA&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR01aLtFhVzmepKaj-xLuWl7mfc9jTdxyUPgQ&s'
    ];

    const getRandomAvatarsUri = () => {
        const randomIndex = Math.floor(Math.random() * avaUriList.length);
        return avaUriList[randomIndex];
    };

    const formatDateTimeString = (isoDateString) => {
        if (!isoDateString) return '';

        const date = new Date(isoDateString);

        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');

        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
      };

    return (
        <TouchableOpacity style={styles.card}>
            <View style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}>
                <Image source={{ uri: getRandomAvatarsUri() }} style={styles.ava} />
            </View>
            <View style={{ width: '40%', justifyContent: 'space-evenly', paddingTop: 8, paddingBottom: 8 }}>
                <Text style={styles.name}>{name}</Text>
                <Text style={[styles.kind, { color: kind === 'd' ? 'red' : 'green' }]
                }>{kind === 'c' ? 'Top Up' : 'Transfer'}</Text>
                <Text style={styles.date}>{formatDateTimeString(date)}</Text>
            </View>
            <View style={styles.nominalContainer}>
                <Text
                    style={[
                        styles.nominal,
                        { color: kind === 'd' ? 'red' : 'green' }
                    ]}
                >
                    {kind === 'd' ? '-' : '+'} {formatNominal(nominal)}
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
        alignItems: 'flex-end',
        paddingRight: 12
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
