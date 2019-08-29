import React from 'react';
import {Button, View, Text, Alert} from 'react-native';
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';

import TopNavigation from '../top-navigation';

export interface IUserInfo {
  email: string;
  username: string;
}

export interface IProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
  userInfo?: IUserInfo;
}

export default class Home extends React.Component<IProps> {
  render(): JSX.Element {
    const {navigation, userInfo} = this.props;

    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <TopNavigation navigation={navigation} />
        <Text>Home Screen11S</Text>
        <Button
          title="Go to Hello"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    );
  }
}
