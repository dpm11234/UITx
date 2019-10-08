import React, { Component } from "react";
import { View, Text } from "react-native";

class TablePoint extends Component {
   render() {
      return (
         <View style={{ flex: 1, borderWidth: 3, borderColor: 'rgb(139,174,253)', borderRadius: 10 }}>
            <View style={{ flex: 0, flexDirection: "row" }}>
               <View
                  style={{
                     flex: 53,
                     backgroundColor: "rgb(139,174,253)",
                     borderRightColor: "white",
                     borderRightWidth: 1,
                     justifyContent: "center",
                     paddingVertical: 5,
                     paddingHorizontal: 8,
                     overflow: 'hidden'
                  }}
               >
                  <Text style={{ color: "white", fontSize: 17 }}>Môn học</Text>
               </View>
               <View style={{ flex: 47, flexDirection: "row" }}>
                  <View
                     style={{
                        flex: 1,
                        justifyContent: "center",
                        backgroundColor: "rgb(139,174,253)",
                        borderRightColor: "white",
                        borderRightWidth: 1,
                        padding: 4
                     }}
                  >
                     <Text
                        style={{ textAlign: "center", color: "white", fontSize: 16 }}
                     >
                        QT
              </Text>
                  </View>
                  <View
                     style={{
                        flex: 1,
                        justifyContent: "center",
                        backgroundColor: "rgb(139,174,253)",
                        borderRightColor: "white",
                        borderRightWidth: 1,
                        padding: 4
                     }}
                  >
                     <Text
                        style={{ textAlign: "center", color: "white", fontSize: 16 }}
                     >
                        GK
              </Text>
                  </View>
                  <View
                     style={{
                        flex: 1,
                        justifyContent: "center",
                        backgroundColor: "rgb(139,174,253)",
                        borderRightColor: "white",
                        borderRightWidth: 1,
                        padding: 4
                     }}
                  >
                     <Text
                        style={{ textAlign: "center", color: "white", fontSize: 16 }}
                     >
                        TH
              </Text>
                  </View>
                  <View
                     style={{
                        flex: 1,
                        justifyContent: "center",
                        backgroundColor: "rgb(139,174,253)",
                        borderRightColor: "white",
                        borderRightWidth: 1,
                        padding: 4
                     }}
                  >
                     <Text
                        style={{ textAlign: "center", color: "white", fontSize: 16 }}
                     >
                        CK
              </Text>
                  </View>
                  <View
                     style={{
                        flex: 1,
                        backgroundColor: "rgb(139,174,253)",
                        padding: 4,
                        justifyContent: "center",
                        overflow: 'hidden'
                     }}
                  >
                     <Text
                        style={{ textAlign: "center", color: "white", fontSize: 16 }}
                     >
                        TB
              </Text>
                  </View>
               </View>
            </View>
            <View style={{ flex: 0, flexDirection: 'row' }}>
               
            </View>
         </View>
      );
   }
}

export default TablePoint;
