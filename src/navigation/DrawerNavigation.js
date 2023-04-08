import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import DrawerComponent from '../components/DrawerComponent';
import HomeScreen from '../screens/HomeScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    return (
      <Drawer.Navigator
        drawerContent={(props) => <DrawerComponent {...props} />}
        screenOptions={{
          headerShown: false,
          drawerActiveBackgroundColor: '#DCB9A3',
          drawerActiveTintColor: '#6D756E',
          drawerInactiveTintColor: '#F2EAE2',
          drawerLabelStyle: { marginLeft: 5 }
        }}>
        <Drawer.Screen
          component={HomeScreen}
          name="Home"
          options={{
            drawerIcon: ({ color }) => {
              <MaterialIcons name="home" size={22} color={color} />;
            }
          }}
        />
      </Drawer.Navigator>
    );
  };
  
  export default DrawerNavigation;