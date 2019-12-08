import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';

import NotificationsCard from '../../components/NotificationsCard';

class ListNotifications extends Component {
   render() {
      return (
         <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ marginBottom: 20 }}>
               <NotificationsCard />
            </View>
            <View style={{ marginBottom: 20 }}>
               <NotificationsCard />
            </View>
            <View style={{ marginBottom: 20 }}>
               <NotificationsCard />
            </View>
            <View style={{ marginBottom: 20 }}>
               <NotificationsCard />
            </View>
            <View style={{ marginBottom: 20 }}>
               <NotificationsCard />
            </View>
            <View style={{ marginBottom: 20 }}>
               <NotificationsCard />
            </View>
            <View style={{ marginBottom: 20 }}>
               <NotificationsCard />
            </View>
            <View style={{ marginBottom: 20 }}>
               <NotificationsCard />
            </View>
         </ScrollView>
      );
   }
}

export default ListNotifications;