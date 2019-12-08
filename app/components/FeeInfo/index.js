import React, { Component } from 'react';
import { View, Text, ScrollView, AsyncStorage } from 'react-native';
import FeeCard from '../FeeCard';
import { tuitionService } from '../../services';

class FeeInfo extends Component {

   constructor(props) {
      super(props);

      this.state = {
         tuitions: [],
         studentId: null
      }

      this.loadTuition();
   }

   loadTuition = async () => {
      const studentId = await AsyncStorage.getItem('studentId');
      this.setState({
        ...this.state,
        studentId
      }, async () => {
        const response = await tuitionService.getTuition(this.state.studentId);
        let tuitions = response.data.tuition ? response.data.tuition.term : [];
        this.setState({
          ...this.state,
          tuitions
        })
        
      });
    }

   render() {
      let elements = [];
      if(this.state.tuitions) {
        elements = this.state.tuitions.map((tuition, index) => {
            return (
               <View key={index}>
                  <FeeCard tuition={tuition} />
               </View>
            )
         })
      } else {
         <View></View>
      }

      

      return (
         <View>
            { elements }
         </View>
      );
   }
}

export default FeeInfo;