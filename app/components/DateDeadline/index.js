import React, { Component } from 'react';
import { View, Text } from 'react-native';
import DeadlineCard from '../DeadlineCard';

class DateDeadline extends Component {
   render() {
      return (
         <View style={{ flex: 1, flexDirection: 'row', marginHorizontal: 10 }}>
            <View style={{ flex: 20, borderRightColor: 'rgb(154, 163, 176)', borderRightWidth: 1, justifyContent: 'center' }}>
               <View style={{ flex: 0 }}>
                  <Text style={{ fontSize: 18, borderBottomColor: 'black', borderBottomWidth: 1, textAlign: 'center', marginHorizontal: 10 }}>
                     Thứ 2
                  </Text>
                  <Text style={{ fontSize: 18, textAlign: "center" }}>
                     09
                  </Text>
               </View>
               <View style={{ position: 'absolute', right: -8, transform: [{ translateX: -0.5 }], width: 15, height: 15, backgroundColor: 'white', borderWidth: 2, borderRadius: 20 }}>
               </View>
            </View>
            <View style={{ flex: 75 }}>
               <View style={{ flex: 1, marginLeft: 15, borderBottomColor: 'rgb(154, 163, 176)', borderBottomWidth: 1 }}>
                  <View style={{ flex: 1, marginVertical: 15 }}>
                     <DeadlineCard />
                  </View>
                  <View style={{ flex: 1, marginVertical: 15 }}>
                     <DeadlineCard />
                  </View>
               </View>
            </View>
         </View>
      );
   }
}

export default DateDeadline;