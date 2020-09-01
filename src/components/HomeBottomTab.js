import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import TrackScreen from '../screens/BottomTabScreens/TrackScreen';
import HomeScreen from '../screens/BottomTabScreens/HomeScreen';
import InventoryScreen from '../screens/InventoryScreen';

const Tab = createBottomTabNavigator();
const HomeTabScreen = () => (
  <Tab.Navigator
    initialRouteName="Home Page"
    activeColor="#fff"
  >
    <Tab.Screen
      name="Inventory"
      component={InventoryScreen}
      options={{
        tabBarLabel: 'Inventory',
        tabBarColor: '#009387',
        tabBarIcon: ({ color }) => (
          <MaterialIcons name="assignment" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Home Page"
      component={HomeScreen}
      options={{
        tabBarLabel: 'Home Page',
        tabBarColor: '#d02860',
        tabBarIcon: ({ color }) => (
          <MaterialIcons name="home" color={color} size={26} />
        ),
      }}
    />

    <Tab.Screen
      name="Track"
      component={TrackScreen}
      options={{
        tabBarLabel: 'Track',
        tabBarColor: '#d02860',
        tabBarIcon: ({ color }) => (
          <MaterialIcons name="location-on" color={color} size={26} />
        ),
      }}
    />

  </Tab.Navigator>


);

export default HomeTabScreen;

