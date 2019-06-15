import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from './screens/Home';
import Follow from './screens/Follow';


// app.js is list of all the screens avaailable and then home.js
// and others is what you wnat to actually do in those

//pass the screens here:
//cmd shift d   to duplicate line
const MainNavigator = createStackNavigator({
  Home: { screen: Home },
  Follow: { screen: Follow }
}, {
  defaultNavigationOptions: {
    headeTintColor: "#fff",
    headerStyle: {
      backgroundColor: "#BA2F16"
    },
    headerTitleStyle: {
      color: "#FFF"
    }
  }
});

const App = createAppContainer(MainNavigator);
export default App;
