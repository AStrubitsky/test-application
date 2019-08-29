import {createStackNavigator, createAppContainer} from 'react-navigation';
import Login from '../auth/login';
import Home from '../home';

const AppNavigator = createStackNavigator(
  {
    Home: Home,
    Login: Login,
  },
  {
    initialRouteName: 'Home',
  },
);

export default createAppContainer(AppNavigator);
