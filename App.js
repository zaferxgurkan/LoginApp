import {createStackNavigator,createAppContainer } from 'react-navigation';

import LoginScreen from './Login';


import ProfileScreen from './Profile';


const AppNavigator = createStackNavigator({
  Login : LoginScreen,
  Profile : ProfileScreen
});

export default createAppContainer(AppNavigator);