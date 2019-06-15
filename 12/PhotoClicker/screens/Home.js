import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';


import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class Home extends React.Component {

  static navigationOptions = {
    title: "PotoClicker"
  }

  render() {

    // set default as empty
    let photo = this.props.navigation.getParam("photo","empty")

    return (
      <View style={styles.container}>
        <Image
        resizeMode = "center"
        style = {styles.imageHolder}
        source = {
          // if empty then will be the pic specified otherwise will be photo
          photo === "empty" ? require("../assets/tara.png") : photo
        }
        />
        <Button
        title="Take Photo"
        style={styles.button}
        onPress={ () => {
          this.props.navigation.navigate("CameraScreen")
        }}/>
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
  imageHolder: {
    alignSelf: "center",
    height: 500,
    margin: 20
  },
  button: {
    margin: 20,
    flex: 1,
    flexDirection: "column"
  }
});
