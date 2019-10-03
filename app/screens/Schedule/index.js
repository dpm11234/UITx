import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import ListCalendarLine from '../../components/ListCalendarLines';

class Schedule extends Component {
   render() {
      return (
         <View style={{ flex: 1 }}>
            <View style={{ height: '25%', backgroundColor: 'red' }}>

            </View>
            <ScrollView>
               <ListCalendarLine />
            </ScrollView>
         </View>
      );
   }
}

export default Schedule;