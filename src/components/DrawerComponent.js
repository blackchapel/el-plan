import React from 'react';
import { Share, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList
} from '@react-navigation/drawer';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Constants, { AppOwnership } from "expo-constants";
import * as Linking from "expo-linking";
import Web3Auth, { LOGIN_PROVIDER, OPENLOGIN_NETWORK } from "@web3auth/react-native-sdk";
import * as WebBrowser from "expo-web-browser";
import axios from 'axios';

const DrawerComponent = (props) => {
  const [user, setUser] = React.useState({});
  const [token, setToken] = React.useState('');

  const logout = async () => {
    await AsyncStorage.removeItem('token');
    props.navigation.replace('Login');
  };

  React.useEffect(() => {
    const getUser = async () => {
        let usr = await AsyncStorage.getItem('user');
        let tok = await AsyncStorage.getItem('token');

        usr = JSON.parse(usr);

        setUser(usr);
        setToken(tok);
    }

    getUser();
  });
  
  const clientId = "BH43YV4vR2zkxpGAAkq1uQEFXTp4wSC_As4GfkhzfpjKCWpjlNfiBqxcdRn3QBwFOoq7L81nG-tKXCteHu8YWwM";
  const resolvedRedirectUrl =
      Constants.appOwnership == AppOwnership.Expo || Constants.appOwnership == AppOwnership.Guest
          ? Linking.createURL("web3auth", {})
          : Linking.createURL("web3auth", { scheme: scheme });

  const login = async () => {
      try {
          setConsole("Logging in");
          const web3auth = new Web3Auth(WebBrowser, {
              clientId,
              network: OPENLOGIN_NETWORK.TESTNET, // or other networks
          });

          const info = await web3auth.login({
              loginProvider: LOGIN_PROVIDER.GOOGLE,
              redirectUrl: resolvedRedirectUrl,
              mfaLevel: "none",
              curve: "secp256k1",
          });
  
          setUserInfo(info);
          setKey(info.privKey);
          console.log(info);
      } catch (error) {
          console.error(error.message);
      }
  }

  const onShare = async () => {
    const result = await Share.share({message: 'Hey there! do checkout Ettarra Coffee House. I just scored 10 coffees this week.'});
  }

  const activateWallet = async () => {
    try {
      user.isWalletActivated = true;
      await AsyncStorage.setItem('user', JSON.stringify(user));
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <View style={styles.body}>
      <DrawerContentScrollView {...props} contentContainerStyle>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      <View style={styles.bottomView} onPress={login}>
        <TouchableOpacity onPress={onShare} style={styles.bottomButton}>
          <MaterialIcons
            name="share"
            size={22}
            color={'#DCB9A3'}
          />
          <Text style={styles.bottomText}>Share Latest Achievement</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomButton} onPress={activateWallet}>
          <MaterialIcons
            name="account-balance-wallet"
            size={22}
            color={'#DCB9A3'}
          /> 
          { user.isWalletActivated ? <Text style={styles.bottomText}>Wallet Connected</Text> : <Text style={styles.bottomText} >Connect Wallet</Text> }
        </TouchableOpacity>

        <TouchableOpacity onPress={logout} style={styles.bottomButton}>
          <MaterialIcons
            name="logout"
            size={22}
            color={'#DCB9A3'}
          />
          <Text style={styles.bottomText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#000000'
  },
  bottomView: {
    padding: 20,
    borderWidth: 1,
    borderTopColor: '#DCB9A3'
  },
  bottomButton: {
    flexDirection: 'row',
    paddingVertical: 15,
    alignItems: 'center'
  },
  bottomText: {
    color: '#DCB9A3',
    marginLeft: 5,
    fontSize: 15,
    fontWeight: 'bold'
  }
});

export default DrawerComponent;