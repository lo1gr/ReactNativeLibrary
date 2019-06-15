import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      //when say flex: 1 means 100% of screen size
      // with flex 1 2 3, the screen is divided into 6 equal portions
      <View style={{
        flex: 1,
        flexDirection: 'column',
      // space-between, space-around
        justifyContent: "space-between",
        // stretch, center
        alignItems: "stretch",
        marginTop: 50
      }}>
        <View style={{width: 100, height: 100,
        // flex: 1,
        backgroundColor: "#26ae60"}}></View>
          <View style={{//width: 100,
          height: 50,
          // flex: 2,
          backgroundColor: "#25CCF7"}}></View>
          <View style={{
            // width: 100, 
            height: 100,
          // flex: 3,
          backgroundColor: "#E74292"}}></View>

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
});
