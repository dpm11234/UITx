import React, { Component } from 'react';
import { View, Text, ScrollView, AsyncStorage } from 'react-native';

import { Calendar, Agenda } from 'react-native-calendars';
import Header from '../../components/Header';
import DateDeadline from '../../components/DateDeadline';
import { deadlineService } from '../../services';

class Deadline extends Component {
   static navigationOptions = ({ navigation }) => {
      return {
         header: () => {
            return (
               <Header title="Deadline" navigation={navigation} />
            );
         }
      };
   };

   constructor(props) {
      super(props);
      this.state = {
         studentId: null,
         deadline: []
      }
      this.loadDeadline();
   }

   loadDeadline = async () => {
      const studentId = await AsyncStorage.getItem('studentId');
      this.setState({
         ...this.state,
         studentId
      }, async () => {
         const response = await deadlineService.getDeadline(this.state.studentId);

         if (response.data) {
            const deadline = response.data.deadline.listClassId;
            this.setState({
               ...this.state,
               deadline
            })
         }

      });
   }

   render() {

      const elements = this.state.deadline.map((item, index) => {
         console.log(item);
         return (
            <View key={index} style={{ flex: 1 }}>
               <DateDeadline deadline={item.listDeadline} className={item.className} />
            </View>
         )
      });

      return (
         <ScrollView showsVerticalScrollIndicator={false} >
            <View>
               <Calendar />
            </View>

            <View style={{ flex: 1 }}>
               {elements}
            </View>
         </ScrollView>
      );
   }
}

export default Deadline;
