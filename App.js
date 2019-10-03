import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import CalendarLine from './app/components/CalendarLine';
import SubjectCard from './app/components/SubjectCard';
import Login from './app/screens/Login';
import AppNavigator from './AppNavigator';
import ListCalendarLines from './app/components/ListCalendarLines';
import Schedule from './app/screens/Schedule';


export default function App() {
  return (
    <View style={styles.container}>
      <Schedule />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
