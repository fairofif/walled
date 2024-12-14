import { StatusBar } from 'expo-status-bar';
import { FlatList, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import TopBar from './components/TopBar';
import Greeter from './components/Greeter';
import Account from './components/Account';
import BalanceCard from './components/BalanceCard';
import HistoryCard from './components/HistoryCard';
import BottomBar from './components/BottomBar'

export default function App() {

  const dummyHistory = [
    {
      id: 1,
      name: 'Rofif Fairuz Hawary',
      kind: 'Transfer',
      nominal: 4425000,
      date: '08 December 2024',
      avaUri: 'https://media.licdn.com/dms/image/v2/C5603AQF1lYuw42VOUg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1631358708319?e=2147483647&v=beta&t=Dc9R4rgCIJl0bu-v1gzG-lV6pRK-Ij73gjFcedEb6e4'
    },
    {
      id: 2,
      name: 'Entis Sutisna',
      kind: 'Transfer',
      nominal: 2100000,
      date: '08 December 2024',
      avaUri: 'https://cdn.antaranews.com/cache/1200x800/2011/04/20110409022242sule-sutisna.jpg'
    },
    {
      id: 3,
      name: 'Bank Syariah Indonesia',
      kind: 'Top Up',
      nominal: 230000,
      date: '07 December 2024',
      avaUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_YMoBy-YuEjGhhAuKKqGT5Nq5sTqBBeouOA&s'
    },
    {
      id: 4,
      name: 'Bank Syariah Indonesia',
      kind: 'Top Up',
      nominal: 230000,
      date: '06 December 2024',
      avaUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_YMoBy-YuEjGhhAuKKqGT5Nq5sTqBBeouOA&s'
    },
    {
      id: 5,
      name: 'Bank Syariah Indonesia',
      kind: 'Top Up',
      nominal: 230000,
      date: '06 December 2024',
      avaUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_YMoBy-YuEjGhhAuKKqGT5Nq5sTqBBeouOA&s'
    }
  ]

  return (
    <SafeAreaView style={styles.container}>
      <TopBar name='Pink Guy' kind='Personal Account' avaUri='https://i1.sndcdn.com/artworks-000162081203-ppxkn6-t500x500.jpg' />
      <View style={styles.balanceContainer}>
        <Greeter name='Pink Guy' time='Morning'/>
        <Account number='77218932'/>
        <BalanceCard balance={10000000}/>
      </View>
      <View style={styles.transactionContainer}>
        <View style={styles.transactionLabelContainer}>
          <Text style={styles.transactionLabel}>Transaction History</Text>
        </View>
        <FlatList
          data={dummyHistory}
          renderItem={({item}) => <HistoryCard
            name={item.name}
            kind={item.kind}
            nominal={item.nominal}
            avaUri={item.avaUri}
            date={item.date}
          />}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            width: '100%',
            alignItems: 'center'
          }}
        />
      </View>
      <BottomBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'space-between'
  },
  balanceContainer: {
    width: '100%',
    height: '35%',
    alignItems:'center',
    justifyContent: 'space-between'
  },
  transactionContainer: {
    width: '100%',
    height: '52%',
    alignItems: 'center',

  },
  transactionLabelContainer: {
    borderBottomWidth: 2,
    borderBottomColor: '#E5E5E5',
    width: '90%',
    height: '15%',
    padding: '3%'
  },
  transactionLabel: {
    fontSize: 25,
    fontWeight: 600
  }
});
