import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';


export default class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      isLoading: true,

    }
  }

// method which loads up all the fonts
  async componentWillMount(){
    await Expo.Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf')
    });
    // to say that font is finished loading:
    this.setState({ isLoading: false})
  }

  render() {
    if(this.state.isLoading){
      return <Expo.AppLoading />;
    }
    return (
      // <View style={styles.container}>
      //   <Text>Checking stuff!?</Text>
      //   <Button style = { styles.button } success>
      //       <Text>Success</Text>
      //   </Button>
      //   <Button style = { styles.buttonwhite }>
      //       <Text>Primary</Text>
      //     </Button>
      //     <Button style = { styles.buttonwhite } info>
      //       <Text>Info</Text>
      //     </Button>
      //     <Button style = { styles.buttonwhite } warning>
      //       <Text>Warning</Text>
      //     </Button>
      // </View>
      <Container>
        <Header />
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://i.ytimg.com/vi/TMIYsoYwh0M/maxresdefault.jpg'}} />
                <Body>
                  <Text>Moto Moto</Text>
                  <Text note>I think Moto Moto likes you!</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'https://i.kym-cdn.com/entries/icons/original/000/028/467/c5c8a1a7bdcca781dc637449cf098169.jpg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   button: {
//     padding: 10
//   },
//   buttonwhite: {
//     padding: 10,
//     backgroundColor: '#FFFFFF'
//   }
// });
