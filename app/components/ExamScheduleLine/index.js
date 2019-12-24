import React, { Component } from "react";
import { View, Text } from "react-native";
import moment from 'moment';

import ExamScheduleCard from "../ExamScheduleCard";

class ExamScheduleLine extends Component {
  render() {

   let data = this.props.data ? this.props.data : {}

   let date = moment(data.date, 'DD-MM-YYYY');

    return (
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View
          style={{
            flex: 20,
            borderRightColor: "rgb(154, 163, 176)",
            borderRightWidth: 1,
            justifyContent: "center"
          }}
        >
          <View style={{ flex: 0 }}>
            <Text style={{ fontSize: 16, textAlign: "center" }}>
               {
                  (date.isoWeekday() + 1) === 8 ? 'Chủ Nhật' : `Thứ ${date.isoWeekday() + 1}` 
               }
            </Text>
            <Text
              style={{
                fontSize: 16,
                textAlign: "center",
                borderTopColor: "black",
                borderTopWidth: 1,
                marginHorizontal: 10
              }}
            >
               {date.date()}
            </Text>
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
        <View style={{ flex: 80 }}>
          <View
            style={{
              flex: 1,
              marginLeft: 15,
              borderBottomColor: "rgb(154, 163, 176)",
              borderBottomWidth: 1
            }}
          >
            <View style={{ flex: 1, marginVertical: 15 }}>
              <ExamScheduleCard exam={data} />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default ExamScheduleLine;
