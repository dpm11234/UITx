/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {View, Text, StatusBar, TouchableOpacity, Image, AsyncStorage } from 'react-native';
import env from '../../environment';
class Header extends Component {

  constructor(props) {
    super(props);

    this.state = {
      studentId: null
    }
    this.getStudentId();
  }

  getStudentId = async () => {
    const studentId = await AsyncStorage.getItem('studentId');
    this.setState({ studentId });
  }

   render() {
      let bgColor = '#F6F8F9'
      let titleColor = '#9BA3B1'
      const { title, type } = this.props;

      if(type === 'c') {
        bgColor = '#8BAEFD';
        titleColor = 'white';
      }

      return (
         <View
            style={{
              flex: 0,
              flexDirection: 'row',
              paddingVertical: 10,
              backgroundColor: bgColor,
              marginTop: StatusBar.currentHeight
            }}
          >
            <View style={{ flex: 20 }}></View>
            <View style={{ flex: 60 }}>
              <Text style={{ textAlign: 'center', fontSize: 26, color: titleColor }}>{title}</Text>
            </View>
            <View style={{ flex: 20, alignItems: 'flex-end' }}>
              <TouchableOpacity
               onPress={() => { this.props.navigation.navigate('Profile') }}
              >
                <Image
                  source={{
                    uri: `${env.domain}/images/user/${this.state.studentId}.jpg`,
                  }}
                  style={{
                    height: 40,
                    width: 40,
                    borderRadius: 20,
                    marginRight: 20,
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
      );
   }
}

export default Header;
