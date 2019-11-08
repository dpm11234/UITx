import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";

class NotificationsCard extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: "rgb(252, 225, 188)",
          paddingVertical: 10,
          paddingHorizontal: 15,
          borderRadius: 5,
          zIndex: 20
        }}
      >
        <View
          style={{
            flex: 0,
            flexDirection: "row",
            width: "85%",
            justifyContent: "space-between"
          }}
        >
          <View
            style={{
              backgroundColor: "#fff",
              paddingVertical: 5,
              paddingHorizontal: 10,
              borderRadius: 8
            }}
          >
            <Text style={{ fontSize: 18, color: "rgb(137, 90, 45)" }}>
              Nghỉ Học
            </Text>
          </View>
          <View>
            <Text style={{ fontSize: 18, color: "rgb(137, 90, 45)" }}>
              Lớp IT001.K13
            </Text>
          </View>
        </View>
        <View style={{ marginVertical: 10 }}>
          <View>
            <Text style={{ fontSize: 18, color: "rgb(137, 90, 45)" }}>
              Giải Tích
            </Text>
          </View>
          <View>
            <Text style={{ fontSize: 18, color: "rgb(137, 90, 45)" }}>
              Thứ 3. 16/10/2019
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 0,
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <Text style={{ fontSize: 16, color: "rgb(137, 90, 45)" }}>
            3 ngày trước
          </Text>
          <Text style={{ fontSize: 16, color: "rgb(137, 90, 45)" }}>...</Text>
        </View>

        <TouchableOpacity
          style={{
            position: "absolute",
            flex: 0,
            backgroundColor: "white",
            right: -7,
            top: -7,
            borderRadius: 50,
            padding: 7,
          }}
        >
          <Text style={{ fontSize: 15, backgroundColor: 'rgb(252, 225, 188)', color: 'white', borderRadius: 70, textAlign: 'center', paddingHorizontal: 6, paddingVertical: 2 }}>X</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default NotificationsCard;
