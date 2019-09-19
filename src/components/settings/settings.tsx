import React from 'react';
import { Button, View, Text } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';
export interface IUserInfo {
  email: string;
  username: string;
}

export interface IProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
  userInfo?: IUserInfo;
}

export default class Settings extends React.Component<IProps> {
    public constructor(props: IProps) {
      super(props);
    }
    render(): JSX.Element {
      return (
      <Text>Settings</Text>
      );
    }

  }