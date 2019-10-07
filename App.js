import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import CalendarLine from './app/components/CalendarLine';
import SubjectCard from './app/components/SubjectCard';
import Login from './app/screens/Login';
import ListCalendarLines from './app/components/ListCalendarLines';
import Schedule from './app/screens/Schedule';
import Home from './app/screens/Home';


export default function App() {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
