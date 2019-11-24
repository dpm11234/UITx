import React, { Component } from 'react';
import { View, Text, AsyncStorage, StatusBar } from 'react-native';

class AuthLoading extends Component {

   constructor(props) {
      super(props);  
      this._bootstrapAsync();
   }

   _bootstrapAsync = async () => {
      const isLogin = await AsyncStorage.getItem('isLogin');

      this.props.navigation.navigate(isLogin === 'true' ? 'App' : 'Auth');
   }

   render() {
      return (
         <View style={{ marginTop: StatusBar.currentHeight }}>
            <Text>Loading</Text>
         </View>  
      );
   }
}

export default AuthLoading;
