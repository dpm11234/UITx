import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

class Profile extends Component {
   render() {
      return (
         <View style={{ flex: 1, marginHorizontal: 15 }}>
            <View style={{ height: '20%' }}>
               <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
                  <View style={{ flex: 30 }}>
                     <Image
                        style={{ width: 100, height: 100, borderRadius: 100 }}
                        source={{
                           uri: `https://interactive-examples.mdn.mozilla.net/media/examples/grapefruit-slice-332-332.jpg`
                        }}
                     />
                  </View>
                  <View
                     style={{
                        flex: 70,
                        justifyContent: "space-around",
                        marginLeft: 15,
                        // marginVertical: 5
                     }}
                  >
                     <View style={{ width: "100%", flex: 1 }}>
                        <Text style={{ fontSize: 22, fontWeight: "bold" }}>
                           Dương Phước Mậu
                        </Text>
                     </View>
                     <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 18 }}>17520739</Text>
                     </View>
                     <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 18 }}>Hệ thống thông tin 2017</Text>
                     </View>
                     <View
                        style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
                     >
                        <TouchableOpacity
                           style={{
                              backgroundColor: "#8BAEFD",
                              paddingHorizontal: 18,
                              borderRadius: 25,
                              marginRight: 15
                           }}
                        >
                           <Text style={{ fontSize: 16, color: "white" }}>Gửi Email</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                           style={{
                              backgroundColor: "#35E0F7",
                              paddingHorizontal: 18,
                              borderRadius: 25
                           }}
                        >
                           <Text style={{ fontSize: 16, color: "white" }}>Chat</Text>
                        </TouchableOpacity>
                     </View>
                  </View>
               </View>
            </View>
            <View style={{ height: '15%', paddingVertical: 10 }}>
               <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                  <View style={{ flex: 25 }}>
                     <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>
                        7.9
                     </Text>
                     <Text style={{ textAlign: 'center', fontSize: 14 }}>Điểm TB</Text>
                  </View>
                  <View style={{ flex: 25 }}>
                     <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>
                        58%
                     </Text>
                     <Text style={{ textAlign: 'center', fontSize: 14 }}>Tiến độ tốt nghiệp</Text>
                  </View>
                  <View style={{ flex: 25 }}>
                     <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>
                        87
                     </Text>
                     <Text style={{ textAlign: 'center', fontSize: 14 }}>Điểm rèn luyện</Text>
                  </View>
               </View>
            </View>
            <View style={{ height: '15%', paddingVertical: 10 }}>
               <View style={{ flex: 1, flexDirection: 'row' }}>
                  <View style={{ flex: 1 }}>
                     <TouchableOpacity
                        style={{ backgroundColor: 'red', flex: 1, alignItems: 'center' }}
                     >
                        <View style={{ backgroundColor: 'black', width: 50, height: 50, borderRadius: 50 }}>
                        </View>
                        <Text>Bảng Điểm</Text>
                     </TouchableOpacity>
                  </View>
                  <View style={{ flex: 1, alignItems: 'center' }}>
                     <TouchableOpacity>
                        <View style={{ backgroundColor: 'black', width: 50, height: 50, borderRadius: 50 }}>
                        </View>
                        <Text>Học Phí</Text>
                     </TouchableOpacity>
                  </View>
                  <View style={{ flex: 1, alignItems: 'center' }}>
                     <TouchableOpacity>
                        <View style={{ backgroundColor: 'black', width: 50, height: 50, borderRadius: 50 }}>
                        </View>
                        <Text>Bảng Điểm</Text>
                     </TouchableOpacity>
                  </View>
                  <View style={{ flex: 1, alignItems: 'center' }}>
                     <TouchableOpacity>
                        <View style={{ backgroundColor: 'black', width: 50, height: 50, borderRadius: 50 }}>
                        </View>
                        <Text>Bảng Điểm</Text>
                     </TouchableOpacity>
                  </View>
               </View>
            </View>
         </View>
      );
   }
}

export default Profile;
