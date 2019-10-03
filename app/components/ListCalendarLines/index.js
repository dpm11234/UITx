import React, { Component } from 'react';
import { View } from 'react-native';

import CalendarLine from '../CalendarLine';


class ListCalendarLine extends Component {
   render() {
      return (
         <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
               <CalendarLine />
            </View>
            <View style={{ flex: 1 }}>
               <CalendarLine />
            </View>
            <View style={{ flex: 1 }}>
               <CalendarLine />
            </View>
         </View>
      );
   }
}

export default ListCalendarLine;