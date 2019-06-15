import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView,FlatList } from 'react-native';
import { Input, Card, Button, Icon } from 'native-base';
import * as firebase from "firebase";

//firebase config
var firebaseConfig = {
    apiKey: "AIzaSyBOe4dk_q3r0IuPKjZtTlnxUaR8pydr4Zs",
    authDomain: "reactbootcamp-8fa8a.firebaseapp.com",
    databaseURL: "https://reactbootcamp-8fa8a.firebaseio.com",
    projectId: "reactbootcamp-8fa8a",
    storageBucket: "reactbootcamp-8fa8a.appspot.com",
    messagingSenderId: "479044448044",
    appId: "1:479044448044:web:97cba86dd7854dd9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


export default function App() {
  constructor(props){
    super(props);
    this.state = {
      message: "",
      messageList: []
    }
  }

  sendMessage = message => {
    var messageListRef = firebase.database().ref("message_list");
//push message to database
    var newMessageRef = messageListRef.push();
    newMessageRef = set({
      text: message,
      time: Date.now()
    })
    this.setState({ message: "" })
  };

updateList = messageList => {
  this.setState({ messageList: messageList });
};

//want to bring all messages as component loads up:
componentWillMount(){
  //tricky stuff have to do because after let messageList=Object...
  // this.updateList  this does not exist this deep!
  var self = this;


  var messageListRef = firebase.database().ref("message_list");

  //whne new entry listener activates
  messageListRef.on("value",dataSnapshot => {
    //into a callback
    if (dataSnapshot.val()) {
      let messageList = Object.values(dataSnapshot.val());
      self.updateList(messageList.reverse());
    }
  })
}

  return (
    <KeyboardAvoidingView
    behavior = "padding" enabled
    style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Message Board </Text>
      </View>
      <View style-{styles.listContainer}>
      <FlatList
      data={this.state.messageList}
      inverted
      keyExtractor={(item, index) => item.time.toString()}
      renderItem={({item}) => (
        <Card style={styles.listItem}>
          <Text ={styles.messageText}>{item.text}</Text>
          //to make the date readable:
          <Text style={styles.timeText}>{new Date(item.time).toLocaleDateString}</Text>
        </Card>
      )}
      />
      </View>
      <View style={styles.inputContainer}>
      <Input
      onChangeText={text => {
        this.setState({message: text})
      }}
      value={this.state.message}
      placeholder="Enter Message"/>
      <Button
      onPress={() => {
        this.sendMessage(this.state.message)
      }}
      danger
      rounded
      icon> <Icon name="arrow-forward" /></Button>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
    margin: 2,
    backgroundColor: "#01CBC6"
  },
  header: {
    backgroundColor: "#2B2B52",
    alignItems: "center",
    height: 40,
    justifyContent: "center"
  },
  headerText: {
    paddingHorizontal: 10,
    color: "#FFF",
    fontSize: 20
  },
  listContainer: {
    flex: 1,
    padding: 5
  },
  listItem: {
    padding: 10
  },
  messageText: {
    fontSize: 20
  },
  timeText: {
    fontSize: 10
  },
  inputContainer: {
    flexDirection: "row",
    padding: 5,
    borderWidth: 5,
    borderRadius: 15,
    borderColor: "#2B2B52",
    color: "#fff"
  }
});
