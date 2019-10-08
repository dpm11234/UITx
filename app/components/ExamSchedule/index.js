import React, { Component } from "react";
import { View } from "react-native";

import ExamScheduleLine from "../ExamScheduleLine";

class ExamSchedule extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <ExamScheduleLine />
        </View>
        <View style={{ flex: 1 }}>
          <ExamScheduleLine />
        </View>
        <View style={{ flex: 1 }}>
          <ExamScheduleLine />
        </View>
      </View>
    );
  }
}

export default ExamSchedule;
