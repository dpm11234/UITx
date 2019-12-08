import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

class Discuss extends Component {
   render() {
      return (
         <View>
            <View style={{ paddingVertical: 10, borderBottomWidth: 1, borderColor: 'black' }}>
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
               <Text style={{ fontSize: 16, paddingVertical: 5 }}>
                  Xin chào! Đây là nội dung cuộc thảo luận, vui lòng không spam tại đây.
               </Text>
               <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                   <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image 
                        source={require('../../../assets/images/heart.png')} 
                        style={{ width: 20, height: 20, marginRight: 10 }} />
                        <Text>120</Text>
                   </View>  
                   <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image 
                        source={require('../../../assets/images/conversation.png')} 
                        style={{ width: 20, height: 20, marginRight: 10 }} />
                        <Text>100 bình luận</Text>
                   </View>  
               </View>
            </View>

            <View style={{ paddingVertical: 10, borderBottomWidth: 1, borderColor: 'black' }}>
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
               <Text style={{ fontSize: 16, paddingVertical: 5 }}>
                  Xin chào! Đây là nội dung cuộc thảo luận, vui lòng không spam tại đây.
               </Text>
               <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                   <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image 
                        source={require('../../../assets/images/heart.png')} 
                        style={{ width: 20, height: 20, marginRight: 10 }} />
                        <Text>120</Text>
                   </View>  
                   <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image 
                        source={require('../../../assets/images/conversation.png')} 
                        style={{ width: 20, height: 20, marginRight: 10 }} />
                        <Text>100 bình luận</Text>
                   </View>  
               </View>
            </View>
         </View>
      );
   }
}

export default Discuss;