import { createAppContainer, createStackNavigator } from 'react-navigation';
import Login from '../auth/login';
import Home from '../home';
import Posts from '../posts'
import Settings from '../settings'
import Profile from '../profile'

const AppNavigator = createStackNavigator(
  {
    Home: Home,
    Login: Login,
    Posts : {screen: Posts},
    Settings : {screen: Settings},
    Profile : {screen: Profile},
  },
  {
    initialRouteName: 'Home',
    
  },
);

const App = createAppContainer(AppNavigator);

export default App;