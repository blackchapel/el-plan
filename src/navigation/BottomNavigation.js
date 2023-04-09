import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from '../screens/HomeScreen';
import Loyalty from '../screens/Loyalty';
import { Entypo } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

function BottomNavigation() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color = "black", size = 24 }) => {
        let iconName;

        if (route.name === "Home") {
          iconName = "home";
        } else if (route.name === "Loyalty") {
          iconName = "credit-card";
        }
        else if (route.name === "Exclusive Events") {
          iconName = "calendar";
        }

        // You can return any component that you like here!
        return <Entypo name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: "#E2C2AA",
      tabBarInactiveTintColor: "gray",
      tabBarActiveBackgroundColor: "#563300",
      tabBarInactiveBackgroundColor: "#563300",
      
    })}>
      <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
      <Tab.Screen name="Loyalty" component={Loyalty} options={{ headerShown: false }}/>
      <Tab.Screen name="Exclusive Events" component={HomeScreen} options={{ headerShown: false }}/>
    </Tab.Navigator>
  )
}

export default BottomNavigation