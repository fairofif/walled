import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';

const BottomBar = () => {
  return (
    <View style={styles.container}>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: '8%',
    backgroundColor: "#FFFFFF",

    shadowColor: '#000',
    shadowOffset: { width: 0, height: -8 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5
  }
});

export default BottomBar;