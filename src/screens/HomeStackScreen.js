import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import SiteEngineerProjectScreen from './SiteEngineerProjectScreen';
import LoginStackScreen from './LoginStackScreen';
import AreaWiseVendorListScreen from './AreaWiseVendorListScreen';
import FilesScreen from './FilesScreen';
import BookNewScreen from './BookNewScreen';
import InventoryScreen from './InventoryScreen';
import HomeScreen from './HomeScreens/HomeScreen';
import MaterialScreen from './HomeScreens/MaterialScreen';
import TrackScreen from './HomeScreens/TrackScreen';
import ItemInventoryScreen from './ItemInventoryScreen';

const HomeStack = createStackNavigator();

function Login() {
  return (
    <LoginStackScreen />
  )
}

const HomeStackScreen = () => (
  <HomeStack.Navigator headerMode='none'>
    <HomeStack.Screen name="Login" component={Login} />
    <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
    <HomeStack.Screen name='MaterialScreen' component={MaterialScreen} />
    <HomeStack.Screen name='TrackScreen' component={TrackScreen}/>
    <HomeStack.Screen name="Site Engineer Project Screen" component={SiteEngineerProjectScreen} />
    <HomeStack.Screen name="AreaWiseVendorList" component={AreaWiseVendorListScreen} />
    <HomeStack.Screen name="FilesScreen" component={FilesScreen} />
    <HomeStack.Screen name="BookNewScreen" component={BookNewScreen} />
    <HomeStack.Screen name="InventoryScreen" component={InventoryScreen}/>
    <HomeStack.Screen name="ItemInventoryScreen" component={ItemInventoryScreen}/>
  </HomeStack.Navigator>
);

export default HomeStackScreen;