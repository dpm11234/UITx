import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { FontAwesome } from 'react-native-vector-icons';

import Schedule from '../Schedule';
import Deadline from '../Deadline';
import Profile from '../Profile';
import Notification from '../Notification';
import Class from '../Class';
import Setting from '../Setting';

const ScheduleStack = createStackNavigator({
  Schedule: { screen: Schedule },
});

const DeadlineStack = createStackNavigator({
  Deadline: { screen: Deadline },
});

const NotificationStack = createStackNavigator({
  Notification: { screen: Notification },
});

const ProfileStack = createStackNavigator({
  Profile: { screen: Profile },
  Setting: { screen: Setting }
});

const ClassStack = createStackNavigator({
  Class: { screen: Class },
});

const Home = createBottomTabNavigator(
  {
    Class: { screen: ClassStack },
    Deadline: { screen: DeadlineStack },
    Notification: { screen: NotificationStack },
    Profile: {
      screen: ProfileStack,
      navigationOptions: {
        tabBarButtonComponent: () => {
          return <View />;
        },
      },
    },
    Schedule: { screen: ScheduleStack },
  },
  {
    tabBarOptions: {
      activeTintColor: '#42f44b',
      inactiveTintColor: 'gray',
    },
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        switch (routeName) {
          case 'Schedule':
            return (
              <Image source={require('../../../assets/images/calendar.png')}
                style={{
                  height: 20,
                  width: 20,
                }}
              />
            );
          case 'Class':
            return (
              <Image source={require('../../../assets/images/group.png')}
                style={{
                  height: 20,
                  width: 20,
                }}
              />
            );
          case 'Deadline':
            return (
              <Image source={require('../../../assets/images/clock.png')}
                style={{
                  height: 20,
                  width: 20,
                }}
              />
            );

          case 'Notification':
            return (
              <Image source={require('../../../assets/images/ring.png')}
                style={{
                  height: 20,
                  width: 20,
                }}
              />
            );
        }
      },
    }),
  },
);

// export default createAppContainer(Home);
export default Home;
