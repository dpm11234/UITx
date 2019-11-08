import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

import NotificationsCard from '../../components/NotificationsCard';
import Header from '../../components/Header';
import ListNotifications from '../../components/ListNotifications';
class Notification extends Component {
   static navigationOptions = ({ navigation }) => {
      return {
  
        header: () => {
          return (
            <Header navigation={navigation} />
          );
        }
      };
    };
   constructor(props) {
      super(props);
      this.state = {
         selectType: 'class',
         style: {
            background: { backgroundColor: 'rgb(139,174,255)', borderRadius: 25 },
            text: [{ color: 'white' }]
         }
      }
   }

   _active = (selectType) => {
      this.setState({
         selectType
      })
   }

   render() {
      return (
         <View style={{ marginHorizontal: 20 }}>

            <View style={{ flex: 0, flexDirection: 'row', marginVertical: 25 }}>
               <View style={{ flex: 1, flexDirection: 'row', borderRadius: 25, overflow: 'hidden', backgroundColor: 'rgb(227, 231, 237)' }}>
                  <TouchableOpacity
                     style={[
                        {
                           flex: 1,
                           alignItems: 'center',
                           paddingVertical: 10
                        },
                        this.state.selectType === 'class' ? this.state.style.background : []
                     ]}
                     onPress={() => { this._active('class') }}
                  >
                     <Text style={[{ fontSize: 20 }, this.state.selectType === 'class' ? this.state.style.text: {} ]}>Lớp</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                     style={[
                        {
                           flex: 1,
                           alignItems: 'center',
                           paddingVertical: 10
                        },
                        this.state.selectType === 'university' ? this.state.style.background : {}
                     ]}
                     onPress={() => { this._active('university') }}
                  >
                     <Text style={[{ fontSize: 20 }, this.state.selectType === 'university' ? this.state.style.text: {} ]}>Trường</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                     style={[
                        {
                           flex: 1,
                           alignItems: 'center',
                           paddingVertical: 10
                        },
                        this.state.selectType === 'system' ? this.state.style.background : []
                     ]}
                     onPress={() => { this._active('system') }}
                  >
                     <Text style={[{ fontSize: 20 }, this.state.selectType === 'system' ? this.state.style.text: {} ]}>Hệ thống</Text>
                  </TouchableOpacity>
               </View>
            </View>

            <ListNotifications />
         </View>
      );
   }
}

export default Notification;