import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  AsyncStorage
} from "react-native";
import Carousel from "react-native-snap-carousel";
import ClassCard from "../../components/ClassCard";
import Header from "../../components/Header";
import ListNotifications from "../../components/ListNotifications";
import ClassMembers from "../../components/ClassMembers";
import CourseFile from "../../components/CourseFile";
import Discuss from "../../components/Discuss";
import { scheduleService } from "../../services";

let schedule = [];

class Class extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      header: () => {
        return <Header type="c" title="Lớp" navigation={navigation} />;
      }
    };
  };

  constructor(props) {
    super(props);
    const width = Dimensions.get("window").width;
    this.state = {
      width,
      selectType: "member",
      activeButtonStyle: {
        height: 4,
        backgroundColor: "blue",
        width: "40%",
        marginTop: 5
      },
      component: <ClassMembers />,
      schedule: []
    };
    this.loadSchedule();
  }

  _renderItem({ item, index }) {
    return (
      <View style={{ height: Dimensions.get("window").height * 0.24 }}>
        <ClassCard course={item} />
      </View>
    );
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
      });
    });
  }

  _active(selectType) {
    let component = this.state.component;

    switch (selectType) {
      case "member":
        component = <ClassMembers />;
        break;
      case "file":
        component = <CourseFile />;
        break;
      case "discuss":
        component = <Discuss />;
        break;
      default:
        break;
    }

    this.setState({
      ...this.state,
      selectType,
      component
    });
  }

  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <Carousel
          ref={c => {
            this._carousel = c;
          }}
          data={this.state.schedule}
          renderItem={this._renderItem}
          sliderWidth={this.state.width}
          itemWidth={this.state.width * 0.7}
          loop={true}
        />
        <View style={{ paddingHorizontal: "7%" }}>
          <Text style={{ fontSize: 25 }}>
            Lập trình Java - <Text style={{ fontSize: 18 }}> IS210.K11</Text>
          </Text>
          <View style={{ flexDirection: "row", marginVertical: 10 }}>
            <Text style={{ fontSize: 16, flex: 30 }}>Giảng viên</Text>
            <View style={{ flex: 70 }}>
              <Text style={{ fontSize: 16 }}>- Vũ Minh Sang</Text>
              <Text style={{ fontSize: 16, marginTop: 5 }}>
                - Vũ Minh Sang (thực hành)
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 16, flex: 30 }}>Lịch học</Text>
            <View style={{ flex: 70 }}>
              <Text style={{ fontSize: 16 }}>
                - Thứ 3, tiết 1, 2, 3 (phòng C212)
              </Text>
              <Text style={{ fontSize: 16, marginTop: 5 }}>
                - Thứ 3, tiết 1, 2, 3 (thực hành - phòng C212)
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginHorizontal: "7%",
            marginTop: "5%",
            marginBottom: 10
          }}
        >
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              style={{ flex: 1 }}
              onPress={() => {
                this._active("member");
              }}
            >
              <Text style={{ fontSize: 16, textAlign: "center" }}>
                Thành Viên
              </Text>
              <View style={{ width: "100%", alignItems: "center" }}>
                <View
                  style={
                    this.state.selectType === "member"
                      ? this.state.activeButtonStyle
                      : null
                  }
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              style={{ flex: 1 }}
              onPress={() => {
                this._active("discuss");
              }}
            >
              <Text style={{ fontSize: 16, textAlign: "center" }}>
                Thảo Luận
              </Text>
              <View style={{ width: "100%", alignItems: "center" }}>
                <View
                  style={
                    this.state.selectType === "discuss"
                      ? this.state.activeButtonStyle
                      : null
                  }
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              style={{ flex: 1 }}
              onPress={() => {
                this._active("file");
              }}
            >
              <Text style={{ fontSize: 16, textAlign: "center" }}>File</Text>
              <View style={{ width: "100%", alignItems: "center" }}>
                <View
                  style={
                    this.state.selectType === "file"
                      ? this.state.activeButtonStyle
                      : null
                  }
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ marginHorizontal: "10%" }}>{this.state.component}</View>
      </ScrollView>
    );
  }
}

export default Class;
