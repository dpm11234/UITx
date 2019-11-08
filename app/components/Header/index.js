/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {View, Text, StatusBar, TouchableOpacity, Image} from 'react-native';

class Header extends Component {
   render() {
      return (
         <View
            style={{
              flex: 0,
              flexDirection: 'row',
              paddingVertical: 10,
              backgroundColor: 'rgb(139,174,253)',
              marginTop: StatusBar.currentHeight
            }}
          >
            <View style={{ flex: 20 }}></View>
            <View style={{ flex: 60 }}>
              <Text style={{ textAlign: 'center', fontSize: 26, color: 'white' }}>Lớp</Text>
            </View>
            <View style={{ flex: 20, alignItems: 'flex-end' }}>
              <TouchableOpacity
               onPress={() => { this.props.navigation.navigate('Profile') }}
              >
                <Image
                  source={{
                    uri: 'https://image.shutterstock.com/image-photo/mountains-during-sunset-beautiful-natural-600w-407021107.jpg',
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
