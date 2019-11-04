import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { Calendar, Agenda } from 'react-native-calendars';
import Header from '../../components/Header';
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
         <View style={{ flex: 1 }}>
            <View style={{ flex: 30 }}>
               <Calendar />
            </View>
            <View style={{ flex: 70 }}></View>
         </View>
      );
   }
}

export default Deadline;