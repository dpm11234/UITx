import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';

class ClassMembers extends Component {

   render() {
      return (
         <View>
            <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
               <Text style={{ width: '25%', fontSize: 16 }}>120 người</Text>
               <View style={{ width: '72%', flexDirection: 'row', backgroundColor: '#E7E6E6', borderRadius: 20 }}>
                  <TextInput
                     style={{ flex: 80, paddingHorizontal: 12, paddingVertical: 5, fontSize: 16 }}
                     value={''}
                     placeholder={'Tìm kiếm...'}
                     placeholderTextColor='black'
                  />
                  <View style={{ flex: 20 }}>
                     <TouchableOpacity
                        style={{ width: 30, backgroundColor: 'black' }}
                     >

                     </TouchableOpacity>
                  </View>
               </View>
            </View>
            <View>
               <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image
                     source={require('../../../assets/images/avatar01.jpg')}
                     style={{ width: 60, height: 60, borderRadius: 30, marginRight: 15 }}
                  />
                  <View>
                     <Text
                        style={{
                           fontSize: 18,
                        }}
                     >
                        Dương Phước Mậu</Text>
                     <Text>Hoạt động 1 giờ trước</Text>
                  </View>
                  <TouchableOpacity style={{ marginLeft: 'auto' }}>
                     <Text style={{ fontSize: 25, letterSpacing: 5 }}>...</Text>
                  </TouchableOpacity>
               </View>

            </View>
         </View>
      );
   }
}

export default ClassMembers;