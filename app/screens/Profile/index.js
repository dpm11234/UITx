import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StatusBar, AsyncStorage } from 'react-native';
import { FontAwesome } from 'react-native-vector-icons';

import TablePoint from '../../components/TablePoint';
import FeeInfo from '../../components/FeeInfo';
import ExamSchedule from '../../components/ExamSchedule';
import SchemeTraining from '../../components/SchemeTraining';
import Header from '../../components/Header';
import { pointService, userService } from '../../services';
import env from '../../environment';

class Profile extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      header: () => {
        return <View
          style={{
            flex: 0,
            flexDirection: 'row',
            paddingVertical: 10,
            marginTop: StatusBar.currentHeight
          }}
        >
          <View style={{ flex: 20 }}></View>
          <View style={{ flex: 60 }}>
            <Text style={{ textAlign: 'center', fontSize: 26, color: 'black' }}>Tài khoản</Text>
          </View>
          <View style={{ flex: 20, alignItems: 'flex-end' }}>
            <TouchableOpacity
              onPress={() => { navigation.navigate('Setting') }}
            >
              <Image
                source={require('../../../assets/images/menu.png')}
                style={{
                  height: 35,
                  width: 35,
                  marginRight: 20,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>;
      }
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      activeButton: '#8BAEFD',
      typeNavigate: 'tablePoint',
      component: <TablePoint />,
      icon: 'calendar-focus',
      pointData: {
        point: {
          transcript: [],
          averageTotal: 0,
          creditsAccumulated: 0,
          creditsLearned: 0
        }
      },
      studentId: null,
      userProfile: {
        faculty: '',
        fullname: '',
        studentId: '',
        trainingPoint: 0
      }
    };

    this.getPoint();
    this.getUserProfile();
  }

  getUserProfile = async () => {
    const studentId = await AsyncStorage.getItem('studentId');
    this.setState({
      ...this.state,
      studentId
    }, async () => {
      const response = await userService.getUser(this.state.studentId);
      let userProfile = response.data.user;
      this.setState({
        ...this.state,
        userProfile
      });
    });
  }

  getPoint = async () => {
    const studentId = await AsyncStorage.getItem('studentId');
    this.setState({
      ...this.state,
      studentId
    }, async () => {
      const response = await pointService.getPoint(this.state.studentId);
      let pointData = response.data;
      if (pointData) {
        this.setState({
          ...this.state,
          pointData
        });
      } else {
        this.setState({
          ...this.state,
          pointData: {
            point: {
              transcript: [],
              averageTotal: 0,
              creditsAccumulated: 0,
              creditsLearned: 0
            }
          }
        });
      }

      this.renderComponent();

    });
  }

  renderComponent = (typeNavigate = 'tablePoint') => {

    let component = <View></View>

    switch (typeNavigate) {
      case 'tablePoint':
        component = <TablePoint point={this.state.pointData.point ? this.state.pointData.point.transcript : []} />;
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

    let faculty = '';

    switch (this.state.userProfile.faculty) {
      case 'HTTT':
        faculty = 'Hệ thống thông tin'
        break;
    }
    console.log(faculty);

    return (
      <ScrollView style={{ marginTop: 15 }} showsVerticalScrollIndicator={false}>
        <View style={{ flex: 0, marginHorizontal: 15 }}>
          <View style={{ marginBottom: 10 }}>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ flex: 30 }}>
                <Image
                  style={{ width: 100, height: 100, borderRadius: 50 }}
                  source={{
                    uri: `${env.domain}/images/user/${this.state.studentId}.jpg`
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
                    {this.state.userProfile.fullname}
                  </Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 17 }}>{this.state.userProfile.studentId}</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 17 }}>{faculty}</Text>
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
          <View style={{ paddingVertical: 5, marginVertical: 10 }}>
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
                  {
                    this.state.pointData.point.averageTotal
                  }
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
                  50%
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
                  {this.state.userProfile.trainingPoint}
                </Text>
                <Text style={{ textAlign: 'center', fontSize: 15 }}>
                  Điểm rèn luyện
            </Text>
              </View>
            </View>
          </View>
          <View style={{ paddingVertical: 5, marginBottom: 10 }}>
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
      </ScrollView>
    );
  }
}

export default Profile;
