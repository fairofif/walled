import { StyleSheet, View, Text, Image } from "react-native"

const Greeter = ({time, name}) => {
    return (
        <View style={{height:'38%', flexDirection: 'row'}}>
            <View style={styles.nameContainer}>
                <Text style={styles.name}>Good {time}, {name}</Text>
                <Text style={styles.desc}>Check all your incoming and outgoing transactions here</Text>
            </View>
            <View style={styles.sunContainer}>
                <Image style={styles.sun} source={require('../assets/icons/happysun.png')}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    nameContainer: {
        width: '75%',
        padding: '4%'
    },
    name: {
        fontSize: 26,
        fontWeight: '600',
        marginBottom: 8
    },
    desc: {
        fontSize: 18
    },
    sunContainer: {
        width:'25%',
        justifyContent: 'center'
    },
    sun: {
        width: 60,
        height: 60
    }
})

export default Greeter;