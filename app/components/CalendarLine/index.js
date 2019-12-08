import React, { Component } from "react";
import { View, Text } from "react-native";

import SubjectCard from "../SubjectCard";

const cardColors = [
  "rgb(244, 189, 117)",
  "rgb(255, 137, 170)",
  "rgb(181, 211, 122)",
  "rgb(127, 237, 238)",
  "rgb(254, 227, 84)",
  "rgb(183, 141, 103)",
  "rgb(128, 158, 210)"
];

class CalendarLine extends Component {
  render() {
    let { courses } = this.props;
    let lengthCardColors = cardColors.length;
    let indexCardColor = 0;
    const elements = courses.map((course, index) => {
      if (indexCardColor > lengthCardColors - 1 || index > indexCardColor) {
        indexCardColor = 0;
      }

      return (
        <View key={index} style={{ flex: 1, marginVertical: 15 }}>
          <SubjectCard course={course} color={cardColors[indexCardColor++]} />
        </View>
      );
    });

    return (
      <View style={{ flex: 1, flexDirection: "row", marginHorizontal: 10 }}>
        <View
          style={{
            flex: 20,
            borderRightColor: "rgb(154, 163, 176)",
            borderRightWidth: 1,
            justifyContent: "center"
          }}
        >
          <View style={{ flex: 0 }}>
            <Text
              style={{
                fontSize: 18,
                borderBottomColor: "black",
                borderBottomWidth: 1,
                textAlign: "center",
                marginHorizontal: 10
              }}
            >
              Thứ {this.props.day}
            </Text>
            <Text style={{ fontSize: 18, textAlign: "center" }}></Text>
          </View>
          <View
            style={{
              position: "absolute",
              right: -8,
              transform: [{ translateX: -0.5 }],
              width: 15,
              height: 15,
              backgroundColor: "white",
              borderWidth: 2,
              borderRadius: 20
            }}
          ></View>
        </View>
        <View style={{ flex: 75 }}>
          <View
            style={{
              flex: 1,
              marginLeft: 15,
              borderBottomColor: "rgb(154, 163, 176)",
              borderBottomWidth: 2
            }}
          >
            {elements}
          </View>
        </View>
      </View>
    );
  }
}

export default CalendarLine;
