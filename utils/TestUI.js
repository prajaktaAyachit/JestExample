import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

class TestUI extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>
          This is a React Native snapshot test.
        </Text>
        <Text style={styles.instructions}>Snapshot test passed</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    fontSize: 15,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flex: 1,
    justifyContent: 'center',
  },
  instructions: {
    fontSize: 15,
    color: '#333333',
    marginBottom: 5,
    textAlign: 'center',
  },
  welcome: {
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
  },
});

export default TestUI;