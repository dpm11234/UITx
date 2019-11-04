import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import ListCalendarLine from "../../components/ListCalendarLines";
import CalendarStrip from "react-native-calendar-strip";
import Header from '../../components/Header';

class Schedule extends Component {
  static navigationOptions = ({ navigation }) => {
    return {

      header: () => {
        return (
          <Header navigation={navigation} />
        );
      }
    };
  };
  constructor(props) {
    super(props);
    this.state = {
      selectDate: ''
    }
  }

  _onSelectDate = (date) => {
    this.setState({
      selectDate: date
    }, () => {
      console.log(this.state.selectDate);
    });

  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ height: "20%" }}>
          <CalendarStrip
            style={{ flex: 1 }}
            locale={{
              name: "vi",
              config: {
                months: "Tháng 1_Tháng 2_Tháng 3_Tháng 4_Tháng 5_Tháng 6_Tháng 7_Tháng 8_Tháng 9_Tháng 10_Tháng 11_Tháng 12".split(
                  "_"
                ),
                monthsShort: 'T1_T2_T3_T4_T5_T6_T7_T8_T9_T10_T11_T12'.split('_'),
                weekdays: 'Thứ 2_Thứ 3_Thứ 4_Thứ 5_Thứ 6_Thứ 7_Chủ Nhật'.split('_'),
                weekdaysShort: 'T2_T3_T4_T5_T6_T7_CN'.split('_')
              }
            }}
            onDateSelected={this._onSelectDate}
          />
        </View>
        <ScrollView>
          <ListCalendarLine />
        </ScrollView>
      </View>
    );
  }
}

export default Schedule;
