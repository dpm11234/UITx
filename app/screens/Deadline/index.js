import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';

import { Calendar, Agenda } from 'react-native-calendars';
import Header from '../../components/Header';
import DateDeadline from '../../components/DateDeadline';

class Deadline extends Component {
   static navigationOptions = ({ navigation }) => {
      return {
         header: () => {
            return (
               <Header navigation={navigation} />
            );
         }
      };
   };

   render() {
      return (
         <ScrollView>
            <View>
               <Calendar />
            </View>

            <View style={{ flex: 1 }}>
               <View style={{ flex: 1 }}>
                  <DateDeadline />
               </View>
               <View style={{ flex: 1 }}>
                  <DateDeadline />
               </View>
               <View style={{ flex: 1 }}>
                  <DateDeadline />
               </View>
            </View>
         </ScrollView>
      );
   }
}

export default Deadline;
