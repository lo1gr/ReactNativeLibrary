import React from 'react';
import { StyleSheet, View, Image , Text, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Button } from 'native-base';

var itemArray = new Array(9).fill('empty');
export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      isCross: false,
      winMessage: ""
    };
  }

  drawItem = itemNumber => {
    if(itemArray[itemNumber]) === 'empty') {
      itemArray[itemNumber] = this.state.isCross;
      // when next user need to change the item!
      this.setState({ isCross: !itemArray[itemNumber]}, () => {});
    }

    this.winGame();

  };

  chooseItemIcon = itemNumber => {
    if(itemArray[itemNumber] !== 'empty') {
      // if true return cross otherwise cirlce
      return itemArray[itemNumber] ? "cross" : "circle"
    }
    return "pencil";
    //TODO: choose appropriate icon
  }

    //choose color for icon
chooseItemColor = itemNumber => {
  if(itemArray[itemNumber] !== 'empty') {
    // if true return cross otherwise cirlce
    return itemArray[itemNumber] ? "red" : "green"
  }
  // if default then
  return "black";
}


  resetGame = () => {
    itemArray.fill('empty')
// put back winning message to 0
    this.setState({ winMessage="" })
    // force update to the component
    this.forceUpdate();
  };

  winGame = () => {
    if((itemArray[0] !== "empty") && (itemArray[0] === itemArray[1]) && (itemArray[1]===itemArray[2])) {
      this.setState({ winMessage: (itemArray[0]? "Cross":"Circle").concat('win')  })
      // now checking for second row. 3, 4 and 5
    } else if((itemArray[3] !== "empty") && (itemArray[3] === itemArray[4]) && (itemArray[4]===itemArray[5])){
      this.setState({ winMessage: (itemArray[0]? "Cross":"Circle").concat('win')  })
  } else if((itemArray[6] !== "empty") && (itemArray[6] === itemArray[7]) && (itemArray[7]===itemArray[8])){
    this.setState({ winMessage: (itemArray[6]? "Cross":"Circle").concat('win')  })
  } else if((itemArray[0] !== "empty") && (itemArray[0] === itemArray[3]) && (itemArray[3]===itemArray[6])){
    this.setState({ winMessage: (itemArray[0]? "Cross":"Circle").concat('win')  })
  } else if((itemArray[1] !== "empty") && (itemArray[1] === itemArray[4]) && (itemArray[4]===itemArray[7])){
    this.setState({ winMessage: (itemArray[1]? "Cross":"Circle").concat('win')  })
  } else if((itemArray[2] !== "empty") && (itemArray[2] === itemArray[5]) && (itemArray[5]===itemArray[8])){
    this.setState({ winMessage: (itemArray[2]? "Cross":"Circle").concat('win')  })
  } else if((itemArray[2] !== "empty") && (itemArray[2] === itemArray[4]) && (itemArray[4]===itemArray[6])){
    this.setState({ winMessage: (itemArray[2]? "Cross":"Circle").concat('win')  })
  }
};

  //TODO: test the todo

  render() {

    return (
      <View stlye = { styles.container }>
        <View style={ styles.grid }>
          <View style={ styles.row }>
            <View style= { styles.item }>
              <TouchableOpacity
              onPress={() => this.drawItem(0)}
              >
                <Entypo
                name={this.chooseItemIcon(0)}
                size={50}
                color={this.chooseItemColor(0)}/>
                </TouchableOpacity>
            </View>
            <View style= { styles.item }>
              <TouchableOpacity
              onPress={() => this.drawItem(0)}
              >
                <Entypo
                name={this.chooseItemIcon(0)}
                size={50}
                color={this.chooseItemColor(0)}/>
                </TouchableOpacity>
            </View>
            <View style= { styles.item }>
              <TouchableOpacity
              onPress={() => this.drawItem(0)}
              >
                <Entypo
                name={this.chooseItemIcon(0)}
                size={50}
                color={this.chooseItemColor(0)}/>
                </TouchableOpacity>
            </View>
          </View>
          <View style={ styles.row }>
            <View style= { styles.item }>
              <TouchableOpacity
              onPress={() => this.drawItem(0)}
              >
                <Entypo
                name={this.chooseItemIcon(0)}
                size={50}
                color={this.chooseItemColor(0)}/>
                </TouchableOpacity>
            </View>
            <View style= { styles.item }>
              <TouchableOpacity
              onPress={() => this.drawItem(0)}
              >
                <Entypo
                name={this.chooseItemIcon(0)}
                size={50}
                color={this.chooseItemColor(0)}/>
                </TouchableOpacity>
            </View>
            <View style= { styles.item }>
              <TouchableOpacity
              onPress={() => this.drawItem(0)}
              >
                <Entypo
                name={this.chooseItemIcon(0)}
                size={50}
                color={this.chooseItemColor(0)}/>
                </TouchableOpacity>
            </View>
          </View>
          <View style={ styles.row }>
            <View style= { styles.item }>
              <TouchableOpacity
              onPress={() => this.drawItem(0)}
              >
                <Entypo
                name={this.chooseItemIcon(0)}
                size={50}
                color={this.chooseItemColor(0)}/>
                </TouchableOpacity>
            </View>
            <View style= { styles.item }>
              <TouchableOpacity
              onPress={() => this.drawItem(0)}
              >
                <Entypo
                name={this.chooseItemIcon(0)}
                size={50}
                color={this.chooseItemColor(0)}/>
                </TouchableOpacity>
            </View>
            <View style= { styles.item }>
              <TouchableOpacity
              onPress={() => this.drawItem(0)}
              >
                <Entypo
                name={this.chooseItemIcon(0)}
                size={50}
                color={this.chooseItemColor(0)}/>
                </TouchableOpacity>
            </View>
          </View>
        </View>
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
  grid: {

  },
  row: {
    flexDirection: 'row'
  },
  item: {
    borderWidth: 2,
    borderColor: "#000",
    padding: 30
  }
  button: {
    padding: 10
  },
  buttonwhite: {
    padding: 10,
    backgroundColor: '#FFFFFF'
  }
});
