import React, { Component } from "react";
import { View, Text, AsyncStorage, Image } from "react-native";
import { schemeTrainingService, pointService } from '../../services';


class SchemeTraining extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [],
      schemeTraining: []
    }

    this.getSchemeTraining();
    this.getSubjectLearned();
  }

  getSchemeTraining =  async () => {
    const response = await schemeTrainingService.getSchemeTraining();

    this.setState({
      ...this.state,
      data: response.data.curriculum.curriculums[0].listSubjectGroup
    })

  }

  getSubjectLearned = async () => {
    const studentId = await AsyncStorage.getItem("studentId");
    this.setState(
      {
        ...this.state,
        studentId
      },
      async () => {
        const response = await pointService.getPoint(this.state.studentId);
        let subjectLearned = [];
        let arr = [];

        if(response.data) {
          subjectLearned = response.data.point.transcript.map((item, index) => {
            item.pointSubject.map(subject => {
              arr.push(subject.subjectId);
            });
            return 0;
          });
        }

        this.setState({
          ...this.state,
          schemeTraining: arr
        })
      }
    );
  }


  render() {
    let elements = this.state.data.map((item, index) => {
      return (
        <View key={index}>
          <Text
            style={{
              backgroundColor: "rgb(139,174,253)",
              textAlign: "center",
              paddingVertical: 7,
              color: "white",
              fontSize: 17
            }}
          >
            {item.subjectGroup}
          </Text>
          {item.listSubject.map((course, index) => {
            let check = this.state.schemeTraining.includes(course.subjectId);

            return (
              <View
                key={index}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderTopColor: "rgb(139,174,253)",
                  borderTopWidth: 1,
                  paddingVertical: 5,
                  paddingHorizontal: 15,
                  backgroundColor: check ? '#C5E0B4' : 'white'
                }}
              >
                <Text style={{ fontSize: 16, flex: 95 }}>{course.subjectName}</Text>
                {
                  check ? (
                    <View style={{ flex: 5 }}>
                      <Image style={{ height: 10, width: 10 }} source={require("../../../assets/images/tick.png")} />
                    </View>
                  ) : <View></View>
                }
              </View>
            );
          })}
        </View>
      );
    });

    return (
      <View
        style={{
          borderColor: "rgb(139,174,253)",
          borderWidth: 2,
          borderRadius: 10,
          overflow: "hidden"
        }}
      >
        {elements}
      </View>
    );
  }
}

export default SchemeTraining;
