import React, { Component } from 'react';
import { View, Text, Image, Dimensions, Platform } from 'react-native';
import { FontAwesome } from 'react-native-vector-icons';

class ClassCard extends Component {
   render() {

      return (
         <View style={{ elevation: 3, width: '100%', borderWidth: 1, borderRadius: 20, borderColor: 'rgba(0, 0, 0, 0)' }}>
            <View style={{ padding: 8 }}>
               <Text style={{ textAlign: 'center', fontSize: 24, fontWeight: "500", marginBottom: 7 }}>Lập Trình Java</Text>

               <View style={{ flex: 0, flexDirection: 'row', marginHorizontal: 7 }}>
                  <View style={{ flex: 50, flexDirection: 'row', alignItems: 'center' }}>
                     <FontAwesome name='clock-o' size={25} />
                     <Text style={{ fontSize: 17, marginLeft: 5 }}>3 DeadLine</Text>
                  </View>
                  <View style={{ flex: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
                     <FontAwesome name='clock-o' size={25} />
                     <Text style={{ fontSize: 17, marginLeft: 5 }}>7 Thảo Luận</Text>
                  </View>
               </View>

               <View style={{ flex: 0, flexDirection: 'row', marginTop: 10 }}>
                  <View style={{ flex: 50, flexDirection: 'row', justifyContent: 'center' }}>
                     <Image
                        source={{ uri: 'https://image.shutterstock.com/image-photo/mountains-during-sunset-beautiful-natural-600w-407021107.jpg' }}
                        style={{ width: 40, height: 40, borderRadius: 20, borderWidth: 2, borderColor: 'white' }}
                     />
                     <Image
                        source={{ uri: 'https://image.shutterstock.com/image-photo/mountains-during-sunset-beautiful-natural-600w-407021107.jpg' }}
                        style={{ width: 40, height: 40, borderRadius: 20, marginLeft: -18, borderWidth: 2, borderColor: 'white' }}
                     />
                     <Image
                        source={{ uri: 'https://image.shutterstock.com/image-photo/mountains-during-sunset-beautiful-natural-600w-407021107.jpg' }}
                        style={{ width: 40, height: 40, borderRadius: 20, marginLeft: -18, borderWidth: 2, borderColor: 'white' }}
                     />
                     <Image
                        source={{ uri: 'https://image.shutterstock.com/image-photo/mountains-during-sunset-beautiful-natural-600w-407021107.jpg' }}
                        style={{ width: 40, height: 40, borderRadius: 20, marginLeft: -18, borderWidth: 2, borderColor: 'white' }}
                     />
                  </View>
                  <View style={{ flex: 50, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                     <Text style={{ fontSize: 18 }}>120 Thành Viên</Text>
                  </View>
               </View>
            </View>
         </View>
      );
   }
}

export default ClassCard;