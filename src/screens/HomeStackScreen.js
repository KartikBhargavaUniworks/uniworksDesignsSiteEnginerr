import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import SiteEngineerProjectScreen from './SiteEngineerProjectScreen';
import LoginStackScreen from './LoginStackScreen';
import HomeTabScreen from '../components/HomeBottomTab';

const HomeStack = createStackNavigator();

function Login(){
    return(
      <LoginStackScreen/>
    )
  }

const HomeStackScreen = () => (
    <HomeStack.Navigator headerMode='none'>
        <HomeStack.Screen name="Login" component={Login}  />
        <HomeStack.Screen name="HomeScreen" component={HomeTabScreen}  />
        <HomeStack.Screen name="Site Engineer Project Screen" component={SiteEngineerProjectScreen}  />
    </HomeStack.Navigator>
);

export default HomeStackScreen;