import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList
} from '@react-navigation/drawer';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DrawerComponent = (props) => {
  const logout = async () => {
    await AsyncStorage.removeItem('token');
    props.navigation.replace('Login');
  };

  return (
    <View style={styles.body}>
      <DrawerContentScrollView {...props} contentContainerStyle>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      <View style={styles.bottomView}>
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