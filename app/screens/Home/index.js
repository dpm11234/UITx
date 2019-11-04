import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import React, { Component } from 'react';
import { View } from 'react-native';


import Schedule from '../Schedule';
import Deadline from '../Deadline';
import Profile from '../Profile';
import Notification from '../Notification';
import Class from '../Class';

const ScheduleStack = createStackNavigator({
   Schedule: { screen: Schedule }
});

const DeadlineStack = createStackNavigator({
   Deadline: { screen: Deadline }
});

const NotificationStack = createStackNavigator({
   Notification: { screen: Notification }
});

const ProfileStack = createStackNavigator({
   Profile: { screen: Profile }
});

const ClassStack = createStackNavigator({
   Class: { screen: Class }
});


const Home = createBottomTabNavigator(
   {
      Class: { screen: ClassStack },
      Deadline: { screen: DeadlineStack },
      Notification: { screen: NotificationStack },
      Profile: {
         screen: ProfileStack,
         navigationOptions: {
            tabBarButtonComponent: () => { return <View></View> }
         }
      },
      Schedule: { screen: ScheduleStack },
   },
   {
      tabBarOptions: {
         activeTintColor: '#42f44b',
         inactiveTintColor: 'gray',
      },
   }
);


// export default createAppContainer(Home);
export default Home;
