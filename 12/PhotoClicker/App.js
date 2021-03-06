import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from "./screens/Home";
import CameraScreen from "./screens/CameraScreen";

const MainNavigator = createStackNavigator(
  {
    Home: { screen: Home },
    CameraScreen: { screen: CameraScreen }
  },
  {
    defaultNavigationOptions: {
      headerTintColor: "#ffff",
      headerStyle: {
        backgroundColor: "b83227"
      },
      headerTitleStyle: {
        color: "#fff"
      }
    }
  }
);

const App = createAppContainer(MainNavigator);
export default App;
