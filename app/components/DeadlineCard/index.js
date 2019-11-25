import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class DeadlineCard extends Component {
   render() {
      return (
         <View style={{
            alignItems: 'center',
            borderColor: 'rgb(181, 221, 122)',
            borderWidth: 2,
            borderRadius: 10,
            paddingLeft: '15%',
            paddingRight: '10%',
            borderLeftWidth: 10
         }}>
            <Text style={{ width: '100%', textAlign: 'center', fontSize: 24, borderBottomColor: 'black', borderBottomWidth: 1, paddingVertical: 5 }}>Lập trình java</Text>
            <Text style={{ fontSize: 18, paddingTop: 5 }}>Hết hạn sau: 7 ngày, 8 giờ</Text>
            <View style={{ width: '85%', flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
               <TouchableOpacity
                  style={{ backgroundColor: '#D0CECE', paddingHorizontal: 8, paddingVertical: 5, borderRadius: 5 }}
               >
                  <Text style={{ fontSize: 20 }}>Nộp Bài</Text>
               </TouchableOpacity>
               <TouchableOpacity
                  style={{ backgroundColor: '#D0CECE', paddingHorizontal: 8, paddingVertical: 5, borderRadius: 5 }}
               >
                  <Text style={{ fontSize: 20 }}>Mô Tả</Text>
               </TouchableOpacity>
            </View>
         </View>
      );
   }
}

export default DeadlineCard;
