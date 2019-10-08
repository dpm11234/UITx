import React, { Component } from 'react';
import { View, Text } from 'react-native';

class ExamSchedule extends Component {
   render() {
      return (
         <View style={{ borderColor: 'rgb(154,163,167)', borderWidth: 2, borderRadius: 10, overflow: 'hidden' }}>
            <View style={{ backgroundColor: 'rgb(154,163,167)', paddingVertical: 8 }}>
               <Text style={{ fontSize: 16, textAlign: 'center', color: 'white' }}>Lập trình java - IS.203.K11</Text>
            </View>
            <View style={{ flex: 0, flexDirection: 'row', marginHorizontal: 10, paddingVertical: 10 }}>
               <View style={{ flex: 45, alignItems: 'center' }}>
                  <Text style={{ fontSize: 16 }}>Phòng: <Text style={{ fontWeight: 'bold' }}>B212</Text></Text>
               </View>
               <View style={{ flex: 25, alignItems: 'center' }}>
                  <Text style={{ fontSize: 16 }}>Ca: <Text style={{ fontWeight: 'bold' }}>2</Text></Text>
               </View>
               <View style={{ flex: 30, alignItems: 'center' }}>
                  <Text style={{ fontSize: 16 }}>STT: <Text style={{ fontWeight: 'bold' }}>88</Text></Text>
               </View>
            </View>
         </View>
      );
   }
}

export default ExamSchedule;