import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';

const TopBar = ({avaUri, name, kind}) => {
  return (
      <View style={styles.container}>
        <View style={styles.topBar_ava}>
          <Image source={{uri: avaUri}}
            style={styles.avaBorder}
          />
        </View>
        <View style={styles.topBar_label}>
          <Text style={{fontSize: 25, fontWeight: 'condensedBold'}}>{name}</Text>
          <Text>{kind}</Text>
        </View>
        <View style={styles.topBar_sun}>
          <Image style={styles.sun} source={require('../assets/icons/sun.png')} />
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: '8%',
    backgroundColor: 'white',

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5
  },
  topBar_ava: {
    width: '20%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  topBar_label: {
    width: '60%',
    height:'100%',
    justifyContent: 'center',
    paddingLeft: 10
  },
  topBar_sun: {
    width: '20%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  avaBorder: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 4,
    borderColor: '#19918F'
  },
  sun: {
    width: 25,
    height: 25
  }
});

export default TopBar;