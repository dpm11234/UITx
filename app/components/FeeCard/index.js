import React, { Component } from 'react';
import { View, Text } from 'react-native';

class FeeCard extends Component {
   render() {
      return (
         <View style={{ borderWidth: 2, borderColor: 'rgb(139,174,253)', borderRadius: 15, overflow: 'hidden', marginBottom: 20 }}>
            <Text
               style={{
                  fontSize: 17,
                  textAlign: 'center',
                  backgroundColor: 'rgb(139,174,253)',
                  color: 'white',
                  paddingVertical: 7
               }}
            >Học kì 1 (2018 - 2019)</Text>
            <View style={{ flex: 0, flexDirection: 'row', paddingVertical: 5, justifyContent: 'space-between', paddingHorizontal: 13 }}>
               <Text style={{ fontSize: 16 }}><Text style={{ fontWeight: 'bold' }}>16</Text> tín chỉ</Text>
               <Text style={{ fontSize: 16 }}>5.300.000đ + 1.200.000đ (học lại)</Text>
            </View>
            <View style={{ flex: 0, flexDirection: 'row', paddingVertical: 5, justifyContent: 'space-between', paddingHorizontal: 13 }}>
               <Text style={{ fontSize: 16 }}>Đã đóng: 6.500.000</Text>
               <Text style={{ fontSize: 16 }}>Còn nợ: 6.500.000</Text>
            </View>
         </View>
      );
   }
}

export default FeeCard;