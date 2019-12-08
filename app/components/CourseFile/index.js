import React, { Component } from "react";
import { View, Text, Image } from "react-native";

class CourseFile extends Component {
  render() {
    return (
      <View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            borderBottomWidth: 1,
            borderColor: "black",
            borderRadius: 1,
            borderStyle: "dotted",
            paddingVertical: 5
          }}
        >
          <Image
            source={require("../../../assets/images/folder-symbol.png")}
            style={{ width: 40, height: 40 }}
          />
          <Text style={{ fontSize: 18, marginLeft: 10 }}>
            Bài thực hành số 1
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            borderBottomWidth: 1,
            borderColor: "black",
            borderRadius: 1,
            borderStyle: "dotted",
            paddingVertical: 5
          }}
        >
          <Image
            source={require("../../../assets/images/folder-symbol.png")}
            style={{ width: 40, height: 40 }}
          />
          <Text style={{ fontSize: 18, marginLeft: 10 }}>
            Bài thực hành số 2
          </Text>
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            borderColor: "black",
            borderRadius: 1,
            borderStyle: "dotted",
            paddingVertical: 5
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", paddingVertical: 5 }}>
            <Image
              source={require("../../../assets/images/pdf-file.png")}
              style={{ width: 40, height: 40 }}
            />
            <Text style={{ fontSize: 18, marginLeft: 10 }}>Lab-1.pdf</Text>
          </View>
          <Text style={{ fontSize: 16, color: '#9d9e9d' }}>
            Mô tả đính kèm của file.
          </Text>
        </View>
      </View>
    );
  }
}

export default CourseFile;
