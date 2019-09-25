import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Login from './app/screens/Login';

export default function App() {
  return (
    <View style={styles.container}>
      <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
