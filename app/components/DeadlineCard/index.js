import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";

class DeadlineCard extends Component {
  render() {

    let data = this.props.data ? this.props.data : {};
    let className = this.props.className ? this.props.className : '';

    return (
      <View
        style={{
          alignItems: "center",
          borderColor: "rgb(181, 221, 122)",
          borderWidth: 2,
          borderRadius: 10,
          paddingLeft: "15%",
          paddingRight: "10%",
          borderLeftWidth: 10
        }}
      >
        <Text
          style={{
            width: "100%",
            textAlign: "center",
            fontSize: 24,
            borderBottomColor: "black",
            borderBottomWidth: 1,
            paddingVertical: 5
          }}
        >
          {className}
        </Text>
        <Text style={{ fontSize: 18, paddingTop: 5, textAlign: "center" }}>
          Hết hạn sau: {data.statusInfo.remaining}
        </Text>
        <View
          style={{
            width: "85%",
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 10
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#D0CECE",
              paddingHorizontal: 8,
              paddingVertical: 5,
              borderRadius: 5
            }}
          >
            <Text style={{ fontSize: 20 }}>Nộp Bài</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#D0CECE",
              paddingHorizontal: 8,
              paddingVertical: 5,
              borderRadius: 5
            }}
          >
            <Text style={{ fontSize: 20 }}>Mô Tả</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default DeadlineCard;
