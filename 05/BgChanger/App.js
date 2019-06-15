import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableNativeFeedback } from 'react-native';

export default class App extends React.Component {
  myButtonPressed(){
    Alert.alert("Logout");
  }

  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.text}>Login</Text> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    backgroundColor: "#BB2CD9",
    paddingVertical: 10,
    paddingHorizontal: 40,
    color: "#FFFFFF",
    BorderRadius: 10
  }
});
