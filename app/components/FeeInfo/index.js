import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import FeeCard from '../FeeCard';

class FeeInfo extends Component {
   render() {
      return (
         <ScrollView>
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
         </ScrollView>
      );
   }
}

export default FeeInfo;