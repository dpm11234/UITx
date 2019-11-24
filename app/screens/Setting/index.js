import React, { Component } from 'react';
import {
   View,
   Text,
   StatusBar,
   TouchableOpacity,
   Image,
   ScrollView,
   Switch,
   Picker
} from 'react-native';

class Setting extends Component {

   static navigationOptions = ({ navigation }) => {
      return {
         header: () => {
            return <View
               style={{
                  flex: 0,
                  flexDirection: 'row',
                  paddingVertical: 10,
                  marginTop: StatusBar.currentHeight
               }}
            >
               <View style={{ flex: 20, marginLeft: 10 }}>
                  <TouchableOpacity
                     onPress={() => { navigation.navigate('Profile') }}
                  >
                     <Image
                        source={require('../../../assets/images/left-arrow.png')}
                        style={{
                           height: 30,
                           width: 30,
                           marginRight: 20,
                        }}
                     />
                  </TouchableOpacity>
               </View>
               <View style={{ flex: 60 }}>
                  <Text style={{ textAlign: 'center', fontSize: 26, color: 'black' }}>Tài khoản</Text>
               </View>
               <View style={{ flex: 20 }}>
               </View>
            </View>;
         }
      };
   };

   constructor(props) {
      super(props);

      this.state = {
         showInfo: true,
         notifyDeadline: true,
         notifyComment: true,
         notifyDeadlineExpired: true,
      }
   }

   toggleSwitchShowInfo = () => {
      this.setState({
         ...this.state,
         showInfo: !this.state.showInfo
      })
   }

   toggleSwitchNotifyDeadline = () => {

      this.setState({
         ...this.state,
         notifyDeadline: !this.state.notifyDeadline
      })
   }

   toggleSwitchNotifyComment = () => {

      this.setState({
         ...this.state,
         notifyComment: !this.state.notifyComment
      })
   }

   toggleSwitchDeadlineExpired = () => {
      this.setState({
         ...this.state,
         notifyDeadlineExpired: !this.state.notifyDeadlineExpired
      })
   }

   render() {
      return (
         <ScrollView style={{ marginHorizontal: '10%' }}>
            <View>
               <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Tài Khoản</Text>
               <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Text style={{ fontSize: 18 }}>Ẩn thông tin tài khoản</Text>
                  <Switch
                     onValueChange={this.toggleSwitchShowInfo}
                     value={this.state.showInfo}
                  />
               </View>
            </View>
            <View style={{ marginTop: 25 }}>
               <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Thông báo</Text>
               <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Text style={{ fontSize: 18 }}>Thông báo Deadline</Text>
                  <Switch
                     onValueChange={this.toggleSwitchNotifyDeadline}
                     value={this.state.notifyDeadline}
                  />
               </View>
               <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Text style={{ fontSize: 18 }}>Nhắc Deadline hết hạn</Text>
                  <Switch
                     onValueChange={this.toggleSwitchDeadlineExpired}
                     value={this.state.notifyDeadlineExpired}
                  />
               </View>
               <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Text style={{ fontSize: 18 }}>Báo hết hạn trước</Text>
                  <Picker
                     selectedValue="6h"
                     style={{
                        height: 20,
                        width: 100,
                        backgroundColor: 'black'
                     }}
                  >
                     <Picker.Item label="6 giờ" value="6h" />
                     <Picker.Item label="6 giờ" value="6s" />
                     <Picker.Item label="6 giờ" value="6m" />
                  </Picker>
               </View>
               <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Text style={{ fontSize: 18 }}>Thông báo bài viết(thảo luận)</Text>
                  <Switch
                     onValueChange={this.toggleSwitchNotifyComment}
                     value={this.state.notifyComment}
                  />
               </View>
            </View>

            <View style={{ alignItems: 'center', marginTop: 50 }}>
               <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image
                     source={require('../../../assets/images/logout.png')}
                     style={{ width: 30, height: 30 }}
                  />
                  <Text style={{ fontSize: 18, marginLeft: 10 }}>Đăng xuất</Text>
               </TouchableOpacity>
            </View>

         </ScrollView>
      );
   }
}

export default Setting;