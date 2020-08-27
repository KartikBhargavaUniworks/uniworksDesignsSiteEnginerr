import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import HomeScreen from '../screens/BottomTabScreens/HomeScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialScreen from '../screens/BottomTabScreens/MaterialScreen';
import ConstructionScreen from '../screens/BottomTabScreens/ConstructionScreen';
import TrackScreen from '../screens/BottomTabScreens/TrackScreen';
import FilesScreen from '../screens/BottomTabScreens/FilesScreen';

const Tab = createBottomTabNavigator();
const HomeTabScreen = () => (
  <Tab.Navigator
    initialRouteName="Home"
    activeColor="#fff"
  >
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarLabel: 'Home Screen',
        tabBarColor: '#009387',
        tabBarIcon: ({ color }) => (
          <MaterialIcons name="assignment" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Material"
      component={MaterialScreen}
      options={{
        tabBarLabel: 'Material',
        tabBarColor: '#694fad',
        tabBarIcon: ({ color }) => (
          <MaterialIcons name="store" color={color} size={26} />
        ),
      }}
    />
    
        <Tab.Screen
          name="Construction"
          component={ConstructionScreen}
          options={{
            tabBarLabel: 'Construction',
            tabBarColor: '#1f65ff',
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="build" color={color} size={26} />
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

    <Tab.Screen
      name="Files"
      component={FilesScreen}
      options={{
        tabBarLabel: 'Files',
        tabBarColor: '#d02860',
        tabBarIcon: ({ color }) => (
          <MaterialIcons name="folder-open" color={color} size={26} />
        ),
      }}
    />

  </Tab.Navigator>


);

export default HomeTabScreen;

