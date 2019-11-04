import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  StatusBar
} from "react-native";
import Carousel from "react-native-snap-carousel";
import ClassCard from "../../components/ClassCard";
import Header from '../../components/Header';

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
      <View>
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
      </View>
    );
  }
}

export default Class;
