/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// import {useWalletConnect} from '@walletconnect/react-native-dapp';
import React, {useEffect, useState} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import './shim.js';
import crypto from 'crypto';
import Web3 from 'web3';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useWalletConnect from './src/hook/useWalletConnect';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const web3 = new Web3(
    'https://mainnet.infura.io/v3/dbce07010ea74682989ca374a2676b42',
  );
  // const newWallet = web3.eth.accounts.wallet.create(1);
  // const newAccount = newWallet[0];
  // console.log(newAccount);

  // const Web3 = require('web3');

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [hax, setHax] = useState();

  useEffect(() => {
    // const web3 = new Web3('https://mainnet.infura.io/');
    // const newWallet = web3.eth.accounts.wallet.create(1);
    // const newAccount = newWallet[0];
    web3net();
  }, []);

  const web3net = async () => {
    const id = await web3.eth.net;
    console.log(id);
    setHax(crypto.randomBytes(32).toString('hex'));
  };

  const connector = useWalletConnect();
  if (!connector.connected) {
    /**
     *  Connect!
     */
    return <Button title="Connect" onPress={() => connector.connect} />;
  }
  return (
    <Button title="Kill Session" onPress={() => connector.killSession()} />
  );

  // return (
  //   <SafeAreaView style={backgroundStyle}>
  //     <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
  //     <ScrollView contentInsetAdjustmentBehavior="automatic">
  //       <View>
  //         <Button
  //           title="Kill Session"
  //           onPress={() => connector.killSession()}
  //         />
  //       </View>
  //     </ScrollView>
  //   </SafeAreaView>
  // );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
