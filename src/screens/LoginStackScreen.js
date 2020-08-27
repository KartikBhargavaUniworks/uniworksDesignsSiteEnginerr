import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './loginScreens/LoginScreen';
import PasswordRecoveryScreen from './loginScreens/PasswordRecoveryScreen';
import SiteEngineerProjectScreen from './SiteEngineerProjectScreen';

const HomeStack = createStackNavigator();

const LoginStackScreen = () => (
    <HomeStack.Navigator headerMode='none'>
        <HomeStack.Screen name="Login" component={LoginScreen}  />
        <HomeStack.Screen name="New Password" component={PasswordRecoveryScreen}  />
        <HomeStack.Screen name="Site Engineer Project Screen" component={SiteEngineerProjectScreen}  />
    </HomeStack.Navigator>
);

export default LoginStackScreen;