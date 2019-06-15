import React from 'react';
import { StyleSheet, Text, View , Button} from 'react-native';

export default class Home extends React.Component {
constructor(props){
  super(props);
  this.state = {
    followRequest: ["Joao","Jane","Ram","Janice"],
    following: ["Hitesh","Tom"]

  }
}

doFollow = index => {
  //the following is equivalent to:
  // const followRequest = this.state.followRequest;
  // const following = this.state.following;
  const {followRequest,following} = this.state;

  const followNew = followRequest.splice(index, 1);
  following.push(followNew);

  //to update this always call setState:
  this.setState({
    followRequest,
    following
  })

}

  render() {
    return (
      <View style={styles.container}>
        <Text>You are following {this.state.following.length} friend</Text>
        <Button
        title="Go to Follow page"
        onPress={ () => {
          //all the functions are so that we import the functions
          this.props.navigation.navigate("Follow", {
            followRequest: this.state.followRequest,
            following: this.state.following,
            doFollow: this.doFollow
          });
        }}

         />
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
