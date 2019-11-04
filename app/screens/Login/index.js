import React, { Component } from 'react';
import { StyleSheet, View, ImageBackground, Text, TextInput, TouchableOpacity, AsyncStorage } from 'react-native';

class Login extends Component {

   static navigationOptions = {
      header: null,
   };

   _signInAsync = async () => {
      await AsyncStorage.setItem('userToken', 'test');
      this.props.navigation.navigate('App');
   }


   render() {
      return (
         <View style={{ flex: 1 }}>
            <View style={{ flex: 30 }}>
               <ImageBackground
                  source={require('../../../assets/images/bg-login.jpg')}
                  style={{ flex: 1 }}
               />
            </View>

            <View style={styles.loginContent}>
               <View style={{ flex: 1, marginTop: 35, alignItems: 'center' }}>
                  <Text style={{ textAlign: "center", fontSize: 35, fontWeight: 'bold', color: '#575b47' }}>
                     Xin Chào!
                  </Text>
                  <Text style={{ textAlign: "center", color: '#bebebe', fontSize: 20 }}>
                     Vui lòng đăng nhập để tiếp tục
                  </Text>
                  <View style={{ width: '80%', marginVertical: 20 }}>
                     <TextInput
                        style={styles.textInput}
                        placeholder="MSSV"
                        placeholderTextColor="#b3b3b3"
                     />

                     <TextInput
                        style={styles.textInput}
                        placeholder="Mật Khẩu"
                        placeholderTextColor="#b3b3b3"
                     />

                     <TouchableOpacity
                        style={styles.loginButton}
                        activeOpacity={0.9}
                        onPress={() => { this._signInAsync() }}
                     >
                        <Text style={styles.textButton}>
                           Đăng Nhập
                        </Text>
                     </TouchableOpacity>
                  </View>
                  <Text style={{ textAlign: "center", color: '#b3b3b3', fontSize: 18 }}>
                     Bằng cách chấp nhận đăng nhập bạn đã chấp nhận với
                     <Text style={{ color: '#8baefd', marginHorizontal: 5 }}> Điều Khoản </Text>
                     của chúng tối!
                  </Text>
               </View>
            </View>
         </View>
      );
   }
}

const styles = StyleSheet.create({
   loginContent: {
      flex: 70,
      marginTop: -25,
      backgroundColor: 'white',
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25
   },
   textInput: {
      fontSize: 20,
      backgroundColor: '#f1f1f1',
      margin: 10,
      borderRadius: 30,
      paddingHorizontal: 25,
      paddingVertical: 10
   },
   loginButton: {
      backgroundColor: '#8baefd',
      marginHorizontal: 10,
      marginTop: 15,
      paddingVertical: 10,
      borderRadius: 30
   },
   textButton: {
      color: '#ffffff',
      fontSize: 20,
      fontWeight: '500',
      textAlign: 'center'
   }
});

export default Login;
