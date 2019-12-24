import React, { Component } from "react";
import { View, AsyncStorage } from "react-native";
import { examService } from "../../services";
import ExamScheduleLine from "../ExamScheduleLine";

class ExamSchedule extends Component {

  constructor(props) {
    super(props);

    this.state = {
      examSchedule: []
    }
    this.getExamSchedule();
  }

  getExamSchedule = async () => {
    const studentId = await AsyncStorage.getItem("studentId");
    this.setState(
      {
        ...this.state,
        studentId
      },
      async () => {
        const response = await examService.getExamSchedule(this.state.studentId);
        
        if(response.data) {
          this.setState({
            ...this.state,
            examSchedule: response.data.exam.listExamSchedule[0].examScheduleDetail
          });
        }
        
      }
    );
  }

  render() {

    let examSchedule = this.state.examSchedule ? this.state.examSchedule : [];

    let elements = examSchedule.map((item, index) => {
      return (
        <View key={index} style={{ flex: 1 }}>
          <ExamScheduleLine data={item} />
        </View>
      )
    })

    return (
      <View style={{ flex: 1 }}>
        {elements}
      </View>
    );
  }
}

export default ExamSchedule;
