import React, { Component } from 'react';
import { View, Text } from 'react-native';

import SubjectCard from '../SubjectCard';

class CalendarLine extends Component {
   render() {
      return (
         <View style={{ flex: 1, flexDirection: 'row', marginHorizontal: 10 }}>
            <View style={{ flex: 25, borderRightColor: 'rgb(154, 163, 176)', borderRightWidth: 1, justifyContent: 'center' }}>
               <View style={{ flex: 0 }}>
                  <Text style={{ fontSize: 20, borderBottomColor: 'black', borderBottomWidth: 1, textAlign: 'center', marginHorizontal: 10 }}>
                     Thứ 2
                  </Text>
                  <Text style={{ fontSize: 20, textAlign: "center" }}>
                     09
                  </Text>
               </View>
               <View>
                  
               </View>
            </View>
            <View style={{ flex: 75 }}>
               <View style={{ flex: 1, marginLeft: 15, borderBottomColor: 'rgb(154, 163, 176)', borderBottomWidth: 1 }}> 
                     <View style={{ flex: 1, marginVertical: 15 }}>
                        <SubjectCard />
                     </View>
                     <View style={{ flex: 1, marginVertical: 15 }}>
                        <SubjectCard />
                     </View>
                  </View>
               </View>
         </View>
      );
   }
}

export default CalendarLine;