import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './app/screens/Home';
import Login from './app/screens/Login';
import AuthLoading from './app/screens/AuthLoading';
import Profile from './app/screens/Profile';

const AuthStack = createStackNavigator({
  Auth: Login
});

const ProfileStack = createStackNavigator({
  Profile: { screen: Profile }
});

const AppNavigation = createSwitchNavigator(
  {
    AuthLoading: AuthLoading,
    App: Home,
    Auth: AuthStack,
    // Profile: { screen: ProfileStack }
  },
  {
    initialRouteName: 'AuthLoading'
  }
);

const AppContainer = createAppContainer(AppNavigation)

export default function App() {
  return (
    <View style={styles.container}>
      <AppContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
