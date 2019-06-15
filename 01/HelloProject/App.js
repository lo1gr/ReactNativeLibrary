import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import NameText from './src/components/NameText'

export default class App extends React.Component {

  render(){
    return(
      <View style={styles.container}>
      {/* name is a property given by YOU */}
        <NameText name="Louis"/>
        <Image
        source={require('./src/images/tara.png')}
        style= {{width: 300, height: 100}}
        />
        <Image source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Shiva_Bangalore.jpg/280px-Shiva_Bangalore.jpg"

        }}
        style= {{width: 300, height: 100}}/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  }
})
