import React from 'react';
import { Button, View, Text } from 'react-native';
import ImagePicker from 'react-native-image-picker'
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';
import {Avatar} from "react-native-elements"
import * as StyledComponents from '../common/commonStyledElements';
import {standartAvatar} from '../../asserts'

export interface IUserInfo {
  email: string;
  username: string;
}

export interface IProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
  userInfo?: IUserInfo;
}


export default class Profile extends React.Component<IProps> {
    public constructor(props: IProps) {
      super(props);
    }
    state = {
      photo: null,
    };
   
    chooseFile = () => {
      var options = {
        noData : true,
      };
      ImagePicker.launchImageLibrary(options, response => {
        if (response.uri) {
          this.setState({photo : response})
        }
      });
    };
    render(): JSX.Element {
      const { photo } = this.state; 
      return (
       
        <View style={{flex: 1, alignItems: 'center'}}>
          
          
            <Avatar containerStyle = {{padding : 20}}
              size = {200}
              rounded
              source={photo!=null ? { uri: photo.uri } : standartAvatar}
              onPress={this.chooseFile}
              showEditButton
            />
          
          <StyledComponents.pageTitle style = {{padding : 10}}>
          {"Скибинский Илья"}
          </StyledComponents.pageTitle>
           
         
        </View>
      );
    }

  }