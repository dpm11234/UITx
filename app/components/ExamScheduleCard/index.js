import React, { Component } from "react";
import { View, Text } from "react-native";
import { schemeTrainingService } from '../../services';
class ExamSchedule extends Component {

   constructor(props) {
      super(props);
      this.state = {
         schemeTraining: []
      }

      this.getSchemeTraining();
   }
  
   getSchemeTraining =  async () => {
      const response = await schemeTrainingService.getSchemeTraining();
      let arr = [];

      if(response.data) {
         response.data.curriculum.curriculums[0].listSubjectGroup.map(item => {
            item.listSubject.map((subject, index) => {
               arr.push({
                  subject: subject.subjectId,
                  subjectName: subject.subjectName
               })
            })
         });
      }
      
      this.setState({
         ...this.state,
         schemeTraining: arr
      })
  
    }

  render() {

   let exam = this.props.exam;
   let subject = this.state.schemeTraining.find(item => {
      return exam.subject === item.subject;
   });

    return (
      <View
        style={{
          borderColor: "rgb(154,163,167)",
          borderWidth: 2,
          borderRadius: 10,
          overflow: "hidden"
        }}
      >
        <View
          style={{ backgroundColor: "rgb(154,163,167)", paddingVertical: 8 }}
        >
          <Text style={{ fontSize: 16, textAlign: "center", color: "white" }}>
            {subject ? subject.subjectName : ''} - {exam.subjectId}
          </Text>
        </View>
        <View
          style={{
            flex: 0,
            flexDirection: "row",
            marginHorizontal: 10,
            paddingVertical: 10
          }}
        >
          <View style={{ flex: 45, alignItems: "center" }}>
            <Text style={{ fontSize: 16 }}>
              Phòng: <Text style={{ fontWeight: "bold" }}>{exam.room}</Text>
            </Text>
          </View>
          <View style={{ flex: 25, alignItems: "center" }}>
            <Text style={{ fontSize: 16 }}>
              Ca: <Text style={{ fontWeight: "bold" }}>{exam.shift}</Text>
            </Text>
          </View>
          <View style={{ flex: 30, alignItems: "center" }}>
            <Text style={{ fontSize: 16 }}>
              STT: <Text style={{ fontWeight: "bold" }}>{exam.day}</Text>
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

export default ExamSchedule;
