import React, { Component } from "react";
import { View, Text } from "react-native";

class FeeCard extends Component {
   render() {
      const { tuition } = this.props;
      let fee = (
         parseInt(tuition.fee.split(",").join("")) -
         parseInt(tuition.relearnFee.split(",").join(""))
      ).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
      let oweFee = (
         parseInt(tuition.fee.split(",").join("")) -
         parseInt(tuition.feeCharged.split(",").join(""))
      ).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

      return (
         <View
            style={{
               borderWidth: 2,
               borderColor: "rgb(139,174,253)",
               borderRadius: 15,
               overflow: "hidden",
               marginBottom: 20
            }}
         >
            <Text
               style={{
                  fontSize: 17,
                  textAlign: "center",
                  backgroundColor: "rgb(139,174,253)",
                  color: "white",
                  paddingVertical: 7
               }}
            >
               Học kì {tuition.semester} ({tuition.year})
        </Text>
            <View
               style={{
                  flex: 0,
                  flexDirection: "row",
                  paddingVertical: 5,
                  paddingHorizontal: 13
               }}
            >
               <Text style={{ fontSize: 16, marginRight: 5 }}>
                  <Text style={{ fontWeight: "bold" }}>Học phí: </Text>
               </Text>
               <Text style={{ fontSize: 16 }}>
                  {tuition.relearnFee == "0"
                     ? tuition.feeCharged
                     : `${fee} + ${tuition.relearnFee} (học lại)`}
               </Text>
            </View>
            <View
               style={{
                  flex: 0,
                  flexDirection: "row",
                  paddingVertical: 5,
                  justifyContent: "space-between",
                  paddingHorizontal: 13
               }}
            >
               <Text style={{ fontSize: 16 }}>Đã đóng: {tuition.fee}</Text>
               <Text style={{ fontSize: 16 }}>
                  Còn nợ: {oweFee}
                  {}
               </Text>
            </View>
         </View>
      );
   }
}

export default FeeCard;
