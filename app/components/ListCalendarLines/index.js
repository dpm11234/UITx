import React, { Component } from 'react';
import { View } from 'react-native';

import CalendarLine from '../CalendarLine';

class ListCalendarLine extends Component {
   render() {
      let mon = [], tue = [], wed = [], thu = [], fri = [], sat = [];
      
      this.props.schedule.map((item, index) => {
         switch (item.dateOfWeek) {
            case '2':
               mon.push(item);
               break;
            case '3':
               tue.push(item);
               break;
            case '4':
               wed.push(item);
               break;
            case '5':
               thu.push(item);
               break;
            case '6':
               fri.push(item);
               break;
            case '7':
               sat.push(item);
               break;
         }
      });

      const arr = [mon, tue, wed, thu, fri, sat].map((courses, index) => {
         return (
            <View key={index} style={{ flex: 1 }}>
               <CalendarLine day={index + 2} courses={courses} />
            </View>
         )
      });

      return (
         <View style={{ flex: 1 }}>
            {
               arr
            }
         </View>
      );
   }
}

export default ListCalendarLine;