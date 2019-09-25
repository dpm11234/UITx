import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import SubjectCard from './app/components/SubjectCard';

export default function App() {
  return (
    <View style={styles.container}>
      <SubjectCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
