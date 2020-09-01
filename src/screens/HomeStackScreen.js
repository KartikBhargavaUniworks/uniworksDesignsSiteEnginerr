import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import SiteEngineerProjectScreen from './SiteEngineerProjectScreen';
import LoginStackScreen from './LoginStackScreen';
import HomeTabScreen from '../components/HomeBottomTab';
import AreaWiseVendorListScreen from './AreaWiseVendorListScreen';
import FilesScreen from './FilesScreen';
import BookNewScreen from './BookNewScreen';
import MaterialScreen from './BottomTabScreens/MaterialScreen';

const HomeStack = createStackNavigator();

function Login() {
  return (
    <LoginStackScreen />
  )
}

const HomeStackScreen = () => (
  <HomeStack.Navigator headerMode='none'>
    <HomeStack.Screen name="Login" component={Login} />
    <HomeStack.Screen name="HomeScreen" component={HomeTabScreen} />
    <HomeStack.Screen name="Site Engineer Project Screen" component={SiteEngineerProjectScreen} />
    <HomeStack.Screen name="AreaWiseVendorList" component={AreaWiseVendorListScreen} />
    <HomeStack.Screen name="FilesScreen" component={FilesScreen} />
    <HomeStack.Screen name="BookNewScreen" component={BookNewScreen} />
    <HomeStack.Screen name="MaterialScreen" component={MaterialScreen} />
  </HomeStack.Navigator>
);

export default HomeStackScreen;