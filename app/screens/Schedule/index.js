import React, { Component } from "react";
import { View, Text, ScrollView, AsyncStorage } from "react-native";
import ListCalendarLine from "../../components/ListCalendarLines";
import Header from '../../components/Header';
import { scheduleService } from '../../services'

let schedule = [];

class Schedule extends Component {
  static navigationOptions = ({ navigation }) => {
    return {

      header: () => {
        return (
          <Header title="Thời Khóa Biểu" navigation={navigation} />
        );
      }
    };
  };
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      studentId: null,
      schedule: []
    }
    
    this.loadSchedule();
  }

  loadSchedule = async () => {
    const studentId = await AsyncStorage.getItem('studentId');
    this.setState({
      ...this.state,
      studentId
    }, async () => {
      const response = await scheduleService.getSchedule(this.state.studentId);
      schedule = response.data.schedule.schedule;
      this.setState({
        ...this.state,
        schedule
      })
    });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <ListCalendarLine schedule={this.state.schedule} />
        </ScrollView>
      </View>
    );
  }
}

export default Schedule;
