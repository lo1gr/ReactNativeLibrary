import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createStackNavigator, createAppContainer} from 'react-navigation';

import * as firebase from 'firebase';

//import all screens
import HomeScreen from './screens/HomeScreen';
import LoadingScreen from './screens/LoadingScreen';
import SignupScreen from './screens/SignupScreen';
import SigninScreen from './screens/SigninScreen';

var firebaseConfig = {
    apiKey: "AIzaSyBOe4dk_q3r0IuPKjZtTlnxUaR8pydr4Zs",
    authDomain: "reactbootcamp-8fa8a.firebaseapp.com",
    databaseURL: "https://reactbootcamp-8fa8a.firebaseio.com",
    projectId: "reactbootcamp-8fa8a",
    storageBucket: "reactbootcamp-8fa8a.appspot.com",
    messagingSenderId: "479044448044",
    appId: "1:479044448044:web:97cba86dd7854dd9"
  };

firebase.initializeApp(firebaseConfig);

const MainNavigator = createStackNavigator(
  {
  Loading: { screen: LoadingScreen },
  SignIn: { screen: SigninScreen },
  SignUp: { screen: SignupScreen },
  Home: { screen: HomeScreen },
  },
  {
    //launcher screen
    initialRouteName: "Loading"
  }
)

// create app container
const App = createAppContainer(MainNavigator);
export default App;
