/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome } from 'react-native-vector-icons';

import TablePoint from '../../components/TablePoint';
import FeeInfo from '../../components/FeeInfo';
import ExamSchedule from '../../components/ExamSchedule';
import SchemeTraining from '../../components/SchemeTraining';
import Header from '../../components/Header';


class Profile extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      header: () => {
        return <Header navigation={navigation} />;
      }
    };
  };

  constructor() {
    super();
    this.state = {
      activeButton: '#8BAEFD',
      typeNavigate: 'tablePoint',
      component: <TablePoint />,
      icon: 'calendar-focus',
    };
  }

  renderComponent = (typeNavigate) => {

    let component = <View></View>
    switch (typeNavigate) {
      case 'tablePoint':
        component = <TablePoint />;
        break;
      case 'feeInfo':
        component = <FeeInfo />;
        break;
      case 'examSchedule':
        component = <ExamSchedule />;
        break;
      case 'schemeTraining':
        component = <SchemeTraining />;
        break;
    }

    this.setState({
      typeNavigate,
      component
    });
  }

  render() {
    return (
      <View style={{ flex: 1, marginHorizontal: 15 }}>
        <View style={{ height: '20%' }}>
          <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flex: 30 }}>
              <Image
                style={{ width: 100, height: 100, borderRadius: 50 }}
                source={{
                  uri: 'https://interactive-examples.mdn.mozilla.net/media/examples/grapefruit-slice-332-332.jpg'
                }}
              />
            </View>
            <View
              style={{
                flex: 70,
                justifyContent: 'space-around',
                marginLeft: 15,
              }}
            >
              <View style={{ width: '100%', flex: 1 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                  Dương Phước Mậu
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 17 }}>17520739</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 17 }}>Hệ thống thông tin 2017</Text>
              </View>
              <View
                style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}
              >
                <TouchableOpacity
                  style={{
                    backgroundColor: '#8BAEFD',
                    paddingHorizontal: 18,
                    borderRadius: 25,
                    marginRight: 15
                  }}
                >
                  <Text style={{ fontSize: 16, color: 'white' }}>
                    Gửi Email
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    flex: 0,
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: '#35E0F7',
                    paddingHorizontal: 18,
                    borderRadius: 25
                  }}
                >
                  <Text style={{ fontSize: 16, color: 'white' }}>Chat </Text>
                  <Image source={require('../../../assets/images/paper-plane.png')}
                    style={{
                      width: 20,
                      height: 20
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={{ height: '15%', paddingVertical: 5 }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}
          >
            <View style={{ flex: 20 }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 18,
                  fontWeight: 'bold'
                }}
              >
                7.9
              </Text>
              <Text style={{ textAlign: 'center', fontSize: 15 }}>Điểm TB</Text>
            </View>
            <View style={{ flex: 30 }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 18,
                  fontWeight: 'bold'
                }}
              >
                58%
              </Text>
              <Text style={{ textAlign: 'center', fontSize: 15 }}>
                Tiến độ tốt nghiệp
              </Text>
            </View>
            <View style={{ flex: 25 }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 18,
                  fontWeight: 'bold'
                }}
              >
                87
              </Text>
              <Text style={{ textAlign: 'center', fontSize: 15 }}>
                Điểm rèn luyện
              </Text>
            </View>
          </View>
        </View>
        <View style={{ height: '20%', paddingVertical: 5 }}>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ flex: 1, marginHorizontal: 5 }}>

              <TouchableOpacity style={{ flex: 1, alignItems: 'center' }}
                onPress={() => { this.renderComponent('tablePoint') }}
              >
                <View style={{ padding: 16, backgroundColor: 'rgb(234,238,242)', borderRadius: 50 }}>
                  <Image source={require('../../../assets/images/exam.png')}
                    style={{
                      width: 20,
                      height: 20
                    }}
                  />
                </View>
                <Text style={{ fontSize: 16, textAlign: 'center', color: this.state.typeNavigate === 'tablePoint' ? this.state.activeButton : 'black' }}>
                  Bảng Điểm
              </Text>

              </TouchableOpacity>

            </View>
            <View style={{ flex: 1, marginHorizontal: 5 }}>
              <TouchableOpacity
                style={[
                  { flex: 1, alignItems: 'center' },
                  this.state.typeNavigate === 'feeInfo' ? this.state.activeButton : []
                ]}
                onPress={() => { this.renderComponent('feeInfo') }}
              >
                <View style={{ padding: 16, backgroundColor: 'rgb(234,238,242)', borderRadius: 50 }}>
                  <Image source={require('../../../assets/images/coin-stack.png')}
                    style={{
                      width: 20,
                      height: 20
                    }}
                  />
                </View>
                <Text style={{ fontSize: 16, textAlign: 'center', color: this.state.typeNavigate === 'feeInfo' ? this.state.activeButton : 'black' }}>
                  Học Phí
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1, marginHorizontal: 5 }}>
              <TouchableOpacity
                style={[
                  { flex: 1, alignItems: 'center' },
                  this.state.typeNavigate === 'examSchedule' ? this.state.activeButton : []
                ]}
                onPress={() => { this.renderComponent('examSchedule') }}
              >
                <View style={{ padding: 16, backgroundColor: 'rgb(234,238,242)', borderRadius: 50 }}>
                  <Image source={require('../../../assets/images/calendar.png')}
                    style={{
                      width: 20,
                      height: 20
                    }}
                  />
                </View>
                <Text style={{ fontSize: 16, textAlign: 'center', color: this.state.typeNavigate === 'examSchedule' ? this.state.activeButton : 'black' }}>
                  Lịch Thi
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1, marginHorizontal: 5 }}>
              <TouchableOpacity
                style={[
                  { flex: 1, alignItems: 'center' },
                  this.state.typeNavigate === 'schemeTraining' ? this.state.activeButton : []
                ]}
                onPress={() => { this.renderComponent('schemeTraining') }}
              >
                <View style={{ padding: 16, backgroundColor: 'rgb(234,238,242)', borderRadius: 50 }}>
                  <Image source={require('../../../assets/images/ctdd.png')}
                    style={{
                      width: 20,
                      height: 20
                    }}
                  />
                </View>
                <Text style={{ fontSize: 16, textAlign: 'center', color: this.state.typeNavigate === 'schemeTraining' ? this.state.activeButton : 'black' }}>
                  CT Đào Tạo
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          {
            this.state.component
          }
        </ScrollView>
      </View>
    );
  }
}

export default Profile;
