import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  TouchableHighlight
} from "react-native";
import Carousel from "react-native-snap-carousel";
import ClassCard from "../../components/ClassCard";
import Header from '../../components/Header';
import ListNotifications from "../../components/ListNotifications";

const data = [
  {
    title: "title 1",
    image:
      "https://image.shutterstock.com/image-photo/mountains-during-sunset-beautiful-natural-600w-407021107.jpg"
  },
  {
    title: "title 2",
    image:
      "https://image.shutterstock.com/z/stock-photo-large-beautiful-drops-of-transparent-rain-water-on-a-green-leaf-macro-drops-of-dew-in-the-morning-668593321.jpg"
  },
  {
    title: "title 1",
    image:
      "https://image.shutterstock.com/image-photo/mountains-during-sunset-beautiful-natural-600w-407021107.jpg"
  }
];

class Class extends Component {
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
    const width = Dimensions.get("window").width;
    this.state = {
      width
    };
  }

  _renderItem({ item, index }) {
    return (
      <View style={{ height: Dimensions.get("window").height * 0.25 }}>
        <ClassCard />
      </View>
    );
  }

  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <Carousel
          ref={c => {
            this._carousel = c;
          }}
          data={data}
          renderItem={this._renderItem}
          sliderWidth={this.state.width}
          itemWidth={this.state.width * 0.7}
          loop={true}
        />
        <View style={{ paddingHorizontal: '7%' }}>
          <Text style={{ fontSize: 25 }}>Lập trình Java - <Text style={{ fontSize: 18 }}> IS210.K11</Text></Text>
          <View style={{ flexDirection: 'row', marginVertical: 10 }}>
            <Text style={{ fontSize: 16, flex: 30 }}>Giảng viên</Text>
            <View style={{ flex: 70 }}>
              <Text style={{ fontSize: 16 }}>- Vũ Minh Sang</Text>
              <Text style={{ fontSize: 16, marginTop: 5 }}>- Vũ Minh Sang (thực hành)</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 16, flex: 30 }}>Lịch học</Text>
            <View style={{ flex: 70 }}>
              <Text style={{ fontSize: 16 }}>- Thứ 3, tiết 1, 2, 3 (phòng C212)</Text>
              <Text style={{ fontSize: 16, marginTop: 5 }}>- Thứ 3, tiết 1, 2, 3 (thực hành - phòng C212)</Text>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: 'row', marginHorizontal: '7%', marginTop: '5%', marginBottom: 10 }}>
          <View style={{ flex: 2 }}>
            <TouchableOpacity
              style={{ flex: 1 }}
              onPress={() => { console.log('test') }}
            >
              <Text style={{ fontSize: 16 }}>Thông Báo</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 2 }}>
            <TouchableOpacity
              style={{ flex: 1 }}
            >
              <Text style={{ fontSize: 16, textAlign: 'center' }}>Thảo Luận</Text>
              <View style={{ width: '100%', alignItems: 'center' }}>
                <View style={{ height: 4, backgroundColor: 'blue', width: '40%' }} />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              style={{ flex: 1 }}
            >
              <Text style={{ fontSize: 16, textAlign: 'center' }}>File</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 2 }}>
            <TouchableOpacity
              style={{ flex: 1 }}
            >
              <Text style={{ fontSize: 16, textAlign: 'center' }}>Thành Viên</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ marginHorizontal: '10%' }}>
          <ListNotifications />
        </View>

      </ScrollView>
    );
  }
}

export default Class;
