//import screens
import HomeScreen from './screens/HomeScreen';
import AddNewContactScreen from './screens/AddNewContactScreen';
import ViewContactScreen from './screens/ViewContactScreen';
import EditContactScreen from './screens/EditContactScreen';

//import react navigation
import { createStackNavigator, createAppContainer  } from 'react-navigation'

const MainNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen},
    Add: { screen: AddNewContactScreen},
    View: { screen: ViewContactScreen},
    Edit: { screen: EditContactScreen}
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
