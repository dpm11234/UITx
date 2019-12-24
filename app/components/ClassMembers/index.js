import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, AsyncStorage } from 'react-native';
import env from '../../environment';

import { classService } from '../../services';

class ClassMembers extends Component {

   constructor(props) {
      super(props);

      this.state = {
         participant: [],
         user: {},
         loading: false
      }
      this.getParticipants();
   }

   getParticipants = async (subjectId) => {
      if(subjectId) {
         if(subjectId.length > 9) {
            subjectId = subjectId.slice(0, 9);
         }
      }

      let user = await AsyncStorage.getItem("user");
      if (subjectId) {
         let participant = await classService.getParticipants(subjectId);
         if (participant.data.participant.length > 0) {
            this.setState({
               ...this.state,
               participant: participant.data.participant
            });
         } else {
            if(!this.state.loading) {
               this.setState({
                  ...this.state,
                  loading: true
               }, async () => {
                  await classService.getAllParticipants(JSON.parse(user));
                  let response = await classService.getParticipants(subjectId);
                  this.setState({
                     ...this.state,
                     participant: response.data,
                     loading: false
                  });
               })
            }
            
         }
      }

   }

   componentWillReceiveProps(nextProps) {
      this.getParticipants(nextProps.subjectId);
   }

   render() {

      let elements = this.state.participant.map((item, index) => {
         return (
            <View key={index} style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image
                     source={{ uri: `${env.domain}/images/user35x35/${item.id}.jpg` }}
                     style={{ width: 40, height: 40, borderRadius: 30, marginRight: 15 }}
                  />
                  <View>
                     <Text
                        style={{
                           fontSize: 18,
                        }}
                     >
                        {item.name}</Text>
                     <Text>Hoạt động 1 giờ trước</Text>
                  </View>
                  <TouchableOpacity style={{ marginLeft: 'auto' }}>
                     <Text style={{ fontSize: 25, letterSpacing: 5 }}>...</Text>
                  </TouchableOpacity>
               </View>
         )
      });

      return (
         <View>
            <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
               <Text style={{ width: '25%', fontSize: 16 }}>{this.state.participant.length} người</Text>
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
               { elements }
            </View>
         </View>
      );
   }
}

export default ClassMembers;