import { StyleSheet, Text, View } from 'react-native';

const BasicHeader = ({ headerName }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerName}>{headerName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '8%',
    backgroundColor: '#FFFFFF',

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    justifyContent: 'center',
    paddingHorizontal: '5%'
  },
  headerName: {
    fontSize: 20,
    fontWeight: 700
  }
});

export default BasicHeader;