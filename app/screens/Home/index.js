import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Schedule from '../Schedule';
import Deadline from '../Deadline';
import Profile from '../Profile';
import Notification from '../Notification';

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

const Home = createBottomTabNavigator(
   {
      Profile: { screen: ProfileStack },
      Schedule: { screen: ScheduleStack },
      Deadline: { screen: DeadlineStack },
      Notification: { screen: NotificationStack },
   },
   {
      tabBarOptions: {
         activeTintColor: '#42f44b',
         inactiveTintColor: 'gray',
       }
   }
);

export default createAppContainer(Home);