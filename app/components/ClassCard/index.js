/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import React, { Component } from 'react';
import { View, Text, Image, Dimensions, Platform } from 'react-native';
import { classService } from '../../services';

class ClassCard extends Component {

  constructor(props) {
    super(props);

    this.state = {
      images: []
    }

    // this.getImage();
  }

  getImage = async () => {
    let response = null;
    let id = setInterval(async () => {
      response = await classService.getParticipants(this.props.course.classId);
      if(response) {
        clearInterval(id);
        let arr = response.data.participant;
        this.setState({
          images: [arr[0], arr[1], arr[2]]
        })
      }
    }, 15000);
  }

  render() {

    const { course } = this.props;

    return (
      <View
        style={{
          elevation: 3,
          width: '100%',
          borderWidth: 1,
          borderRadius: 20,
          borderColor: 'rgba(0, 0, 0, 0)',
        }}>
        <View style={{ padding: 16 }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 18,
              fontWeight: '500',
              marginBottom: 7,
            }}
            numberOfLines={1}
            ellipsizeMode='tail'
          >
            {course.className}
          </Text>

          <View style={{ flex: 0, flexDirection: 'row', marginHorizontal: 7 }}>
            <View
              style={{ flex: 50, flexDirection: 'row', alignItems: 'center' }}>

              <Text style={{ fontSize: 16, marginLeft: 5 }}>3 DeadLine</Text>
            </View>
            <View
              style={{
                flex: 50,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}>

              <Text style={{ fontSize: 16, marginLeft: 5 }}>7 Thảo Luận</Text>
            </View>
          </View>

          <View style={{ flex: 0, flexDirection: 'row', marginTop: 10 }}>
            <View
              style={{
                flex: 50,
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
            </View>
            <View
              style={{
                flex: 50,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{ fontSize: 16 }}>120 Thành Viên</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default ClassCard;
