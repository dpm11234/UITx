import React, { Component } from "react";
import { View, Text } from "react-native";
import DeadlineCard from "../DeadlineCard";
import moment from 'moment';

class DateDeadline extends Component {
  render() {

    let listDeadline = this.props.deadline ? this.props.deadline : [];
    let className = this.props.className ? this.props.className : '';

    const elements = listDeadline.map((item, index) => {
      let date = moment(item.statusInfo.timeDeadline);

      return (
        <View key={index} style={{ flex: 1, flexDirection: "row", marginHorizontal: 10 }}>
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
                {
                  (date.isoWeekday() + 1) === 8 ? 'Chủ Nhật' : `Thứ ${date.isoWeekday() + 1}` 
                }
          </Text>
              <Text style={{ fontSize: 18, textAlign: "center" }}>{date.date()}</Text>
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
                borderBottomWidth: 1
              }}
            >
              <View style={{ flex: 1, marginVertical: 15 }}>
                <DeadlineCard data={item} className={className} />
              </View>
            </View>
          </View>
        </View>
      );
    });

    let date = null;

    return (
      <View>
        { elements }
      </View>
    );
  }
}

export default DateDeadline;
