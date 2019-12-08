import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

class SubjectCard extends Component {
  render() {

    const { color } = this.props;

    const renderLesson = () => {
      let numLessons = Array.from(this.props.course.lesson);
      let lessons = [];
      for (let i = 0; i < numLessons.length; i++) {
        lessons.push(
          <View
            key={i}
            style={[
              styles.lesson,
              {
                paddingVertical: 10,
                marginTop: i == 0 ? 0 : 3,
                backgroundColor: color
              }
            ]}
          >
            <Text
              style={{
                color: "#ffffff",
                fontSize: 18,
                fontWeight: "bold"
              }}
            >
              {numLessons[i]}
            </Text>
          </View>
        );
      }

      return lessons;
    };

    return (
      <View style={[styles.container, {borderColor: color}]}>
        <View style={{ width: "15%" }}>{renderLesson()}</View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <View
              style={{
                height: 35,
                flex: 0,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-end"
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  flex: 80,
                  color: "rgb(154, 163, 176)",
                  textAlign: "center"
                }}
              >
                7h30 - 9h30
              </Text>
              <View
                style={{
                  flex: 0,
                  height: 35,
                  backgroundColor: "rgb(244, 189, 117)",
                  padding: 3,
                  justifyContent: "center",
                  borderBottomLeftRadius: 10
                }}
              >
                <Text
                  style={{
                    color: "#ffffff",
                    fontSize: 16,
                    fontWeight: "bold",
                    textAlign: "center"
                  }}
                >
                  {this.props.course.classRoom}
                </Text>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  textAlign: "center",
                  color: "rgb(75, 80, 93)"
                }}
              >
                {`${this.props.course.className} (${this.props.course.teacher.teacherType})`}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: "row",
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 10,
    height: "100%"
  },
  numLesson: {
    flex: 15,
    height: "100%"
  },
  lesson: {
    flex: 0,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default SubjectCard;
