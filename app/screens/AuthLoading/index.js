import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';

class AuthLoading extends Component {

   constructor(props) {
      super(props);  
      this._bootstrapAsync();
   }

   _bootstrapAsync = async () => {
      const userToken = await AsyncStorage.getItem('userToken');

      this.props.navigation.navigate(userToken === 'test' ? 'App' : 'Auth');
   }

   render() {
      return (
         <View>
            <Text>Loading</Text>
         </View>  
      );
   }
}

export default AuthLoading;
