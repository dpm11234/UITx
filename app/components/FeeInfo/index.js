import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import FeeCard from '../FeeCard';

class FeeInfo extends Component {
   render() {
      return (
         <View>
            <View>
               <FeeCard />
            </View>
            <View>
               <FeeCard />
            </View>
            <View>
               <FeeCard />
            </View>
            <View>
               <FeeCard />
            </View>
            <View>
               <FeeCard />
            </View>
            <View>
               <FeeCard />
            </View>
         </View>
      );
   }
}

export default FeeInfo;