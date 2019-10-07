import React, { Component } from "react";
import { View, Text } from "react-native";

class NotificationsCard extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: "rgb(252, 225, 188)",
          paddingVertical: 10,
          paddingHorizontal: 15,
          borderRadius: 5
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
            <Text style={{ fontSize: 20, color: "rgb(137, 90, 45)" }}>
              Nghỉ Học
            </Text>
          </View>
          <View>
            <Text style={{ fontSize: 20, color: "rgb(137, 90, 45)" }}>
              Lớp IT001.K13
            </Text>
          </View>
        </View>
        <View style={{ marginVertical: 10 }}>
          <View>
            <Text style={{ fontSize: 20, color: "rgb(137, 90, 45)" }}>
              Giải Tích
            </Text>
          </View>
          <View>
            <Text style={{ fontSize: 20, color: "rgb(137, 90, 45)" }}>
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

        <View
          style={{
            position: "absolute",
            width: 30,
            height: 30,
            backgroundColor: "red",
            left: '100%',
            // transform: [
            //    { translateX: 50 }
            // ]
          }}
        >
          <Text>X</Text>
        </View>
      </View>
    );
  }
}

export default NotificationsCard;
