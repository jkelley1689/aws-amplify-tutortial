import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import Amplify from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react-native';
import awsconfig from './aws-exports';
import Home from './Home';

Amplify.configure(awsconfig);

function App() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
});

export default withAuthenticator(App);
