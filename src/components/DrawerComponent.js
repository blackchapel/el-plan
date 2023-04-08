import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

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

const DrawerComponent = (props) => {
  const logout = async () => {
    await AsyncStorage.removeItem('token');
    props.navigation.replace('Login');
  };
  
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

  return (
    <View style={styles.body}>
      <DrawerContentScrollView {...props} contentContainerStyle>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      <View style={styles.bottomView} onPress={login}>
        <TouchableOpacity style={styles.bottomButton}>
          <MaterialIcons
            name="account-balance-wallet"
            size={22}
            color={'#DCB9A3'}
          />
          <Text style={styles.bottomText}>Connect Wallet </Text>
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