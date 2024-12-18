import { ActivityIndicator, Alert, FlatList, SafeAreaView, StyleSheet, Text, View, ScrollView, RefreshControl } from 'react-native';
import TopBar from '../components/TopBar';
import Greeter from '../components/Greeter';
import Account from '../components/Account';
import BalanceCard from '../components/BalanceCard';
import HistoryCard from '../components/HistoryCard';
import BottomBar from '../components/BottomBar';
import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { getMyTransaction, getUserAuth } from '../api/restApi';

export default function Dashboard({ navigation }) {
  const { logout, user } = useAuth();
  const [userData, setUserData] = useState({});
  const [loading, setIsLoading] = useState(true);
  const [transactions, setTransactions] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const getUser = async () => {
    try {
      const data = await getUserAuth(user.token);
      setUserData(data);
    } catch (e) {
      Alert.alert('Failed to retrieve user data: ' + e.message + user.token);
    }
  };

  const sortTransactionsByDateDesc = (transactions) => {
    return transactions.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
  };

  const getTransaction = async () => {
    try {
      const trans = await getMyTransaction(user.token);
      setTransactions(sortTransactionsByDateDesc(trans));
    } catch (e) {
      Alert.alert('Failed to retrieve transaction datas: ' + e.message)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getUser();
    getTransaction();
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
      Alert.alert('Logged out');
    } catch (e) {
      Alert.alert('Logout Failed');
    }
  };

  const navigateToTopUp = () => {
    navigation.navigate('TopUp');
  }

  const navigateToTransfer = () => {
    navigation.navigate('Transfer');
  }

  const getFrontName = (fullName) => {
    if (typeof fullName !== 'string') {
      return '';
    }

    const nameParts = fullName.split(' ');
    return nameParts[0];
  };


  if (loading) {
    return (
      <ActivityIndicator
        size='large' color='#0000ff'
      />
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <TopBar
        name={userData.full_name}
        onPressLogout={handleLogout}
        kind='Personal Account'
        avaUri={userData.avatar_url}
      />
      <View style={styles.balanceContainer}>
        <Greeter name={getFrontName(userData.full_name)} time='Morning' />
        <Account number={userData.account_no} />
        <BalanceCard
          balance={userData.balance}
          onPressTopUp={navigateToTopUp}
          onPressTransfer={navigateToTransfer}
        />
      </View>
      <View style={styles.transactionContainer}>
        <View style={styles.transactionLabelContainer}>
          <Text style={styles.transactionLabel}>Transaction History</Text>
        </View>
        <FlatList
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={() => {
                getUser()
                getTransaction()
              }}
              colors={['#0000ff']}
              progressBackgroundColor='#ffffff'
            />
          }
          data={transactions}
          renderItem={({ item }) => <HistoryCard
            name={item.from_to}
            kind={item.type}
            nominal={item.amount}
            date={item.created_at}
          />}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            width: '100%',
            alignItems: 'center'
          }}
        />
      </View>
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
    alignItems: 'center',
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
  },
  scrollView: {
    flex: 1
  }
});
