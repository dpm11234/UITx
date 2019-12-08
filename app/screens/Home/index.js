import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { FontAwesome } from 'react-native-vector-icons';

import Schedule from '../Schedule';
import Deadline from '../Deadline';
import Profile from '../Profile';
import Class from '../Class';
import Setting from '../Setting';

const ScheduleStack = createStackNavigator({
  Schedule: { screen: Schedule },
});

const DeadlineStack = createStackNavigator({
  Deadline: { screen: Deadline },
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
    Schedule: { screen: ScheduleStack },
    Deadline: { screen: DeadlineStack },
    Class: { screen: ClassStack },
    Profile: {
      screen: ProfileStack,
      navigationOptions: {
        tabBarButtonComponent: () => {
          return <View />;
        },
      },
    },
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
              <Image source={focused ? require('../../../assets/images/calendar-focus.png') : require('../../../assets/images/calendar.png')}
                style={{
                  height: 20,
                  width: 20,
                }}
              />
            );
          case 'Class':
            return (
              <Image source={focused ? require('../../../assets/images/group-focus.png') : require('../../../assets/images/group.png')}
                style={{
                  height: 20,
                  width: 20,
                }}
              />
            );
          case 'Deadline':
            return (
              <Image source={focused ? require('../../../assets/images/fast-focus.png') : require('../../../assets/images/fast.png')}
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
      tabBarLabel: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        switch (routeName) {
          case 'Schedule':
            return (
              <Text style={{ textAlign: 'center', color: `${ focused ? '#8BAEFD' : 'black' }` }}>Thời khóa biểu</Text>
            );
          case 'Class':
            return (
              <Text style={{ textAlign: 'center', color: `${ focused ? '#8BAEFD' : 'black' }` }}>Lớp</Text>
            );
          case 'Deadline':
            return (
              <Text style={{ textAlign: 'center', color: `${ focused ? '#8BAEFD' : 'black' }` }}>Deadline</Text>
            );
        }
      },
    }),
  },
);

// export default createAppContainer(Home);
export default Home;
