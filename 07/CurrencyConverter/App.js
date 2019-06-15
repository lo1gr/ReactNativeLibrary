import React from 'react';
import {
  StyleSheet,
  Alert,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity } from 'react-native';

const currencyPerRupee = {
  DOLLAR: 0.014,
  EURO: 0.012,
  POUND: 0.011,
  RUBEL: 0.93,
  AUSDOLLAR: 0.2,
  CANDOLLAR: 0.019,
  YEN: 1.54,
  DINAR: 0.0043,
  BITCOIN: 0.0000041
}

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      inputValue: "",
      resultValue: "0.0"
    }
  }

  buttonPressed = currency => {
    if(this.state.inputValue==="") {
      Alert.alert("Enter some value");
    }
    let result = parseFloat(this.state.inputValue) * currencyPerRupee[currency]

    this.setState({resultValue: result.toFixed(2)})
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.screenview}>
            <View style={styles.resultcontainer}>
              <Text style={styles.resultValue}>
              {this.state.resultValue}
              </Text>
            </View>
            <View style={styles.inputcontainer}>
            <TextInput
            style={styles.input}
            selectionColor="#FFF"
            keyboardType="numeric"
            placeholder="Enter Value"
            value={this.state.inputValue}
            onChangeText={ inputValue =>
              this.setState({
              inputValue
            })
          }
            />
            </View>

            <View style={styles.converterbuttoncontainer}>
            <TouchableOpacity
            onPress= { () => this.buttonPressed("DOLLAR")}
            style={styles.converterbutton}>
            <Text style={styles.converterbuttontext}>$</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress= { () => this.buttonPressed("EURO")}
            style={styles.converterbutton}>
            <Text style={styles.converterbuttontext}>EURO</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress= { () => this.buttonPressed("POUND")}
            style={styles.converterbutton}>
            <Text style={styles.converterbuttontext}>POUND</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress= { () => this.buttonPressed("AUSDOLLAR")}
            style={styles.converterbutton}>
            <Text style={styles.converterbuttontext}>AUS$</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress= { () => this.buttonPressed("CANDOLLAR")}
            style={styles.converterbutton}>
            <Text style={styles.converterbuttontext}>CANDOLLAR</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress= { () => this.buttonPressed("YEN")}
            style={styles.converterbutton}>
            <Text style={styles.converterbuttontext}>YEN</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress= { () => this.buttonPressed("DINAR")}
            style={styles.converterbutton}>
            <Text style={styles.converterbuttontext}>DINAR</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress= { () => this.buttonPressed("BITCOIN")}
            style={styles.converterbutton}>
            <Text style={styles.converterbuttontext}>BITCOIN</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress= { () => this.buttonPressed("RUBEL")}
            style={styles.converterbutton}>
            <Text style={styles.converterbuttontext}>RUBEL</Text>
            </TouchableOpacity>

            </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#blue',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#c1c1c1",
    marginTop: 20
  },
  screenview: {
    flex:1
  },
  resultcontainer: {
    height: 70,
    marginTop: 20,
    justifyContent: "center",
    borderColor: "#c1c1c1",
    backgroundColor: "#0A79DE",
    alignItems: "center",
    borderWidth: 2
  },
  resultValue: {
    fontSize: 30,
    fontWeight: "bold",
    color: '#F4C724'
  },
  inputcontainer: {
    height: 70,
    marginTop: 10,
    justifyContent: "center",
    borderColor: "#c1c1c1",
    borderWidth: 2,
    backgroundColor: "#0A79DE"
  },
  input: {
    color: "#FFFFFF",
    fontSize: 30
  },
  converterbuttoncontainer: {
    flexDirection: 'row',
    flexWrap: "wrap",
    marginTop: 20,
    borderColor: "#c1c1c1",
    borderWidth: 2
  },
  converterbutton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0A79DF",
    height: 100,
    borderColor: "#c1c1c1",
    borderWidth: 2,
    width: "33.3%"
  },
  converterbuttontext: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold"
  }
});
