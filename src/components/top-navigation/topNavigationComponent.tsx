import React from 'react';
import {Button, Alert, Text} from 'react-native';
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';
import * as StyledComponents from './topNavigationStyles';

import i18n from '../../internationalization/i18n';
import {IUserInfo} from '../home/homeComponent';

export interface IProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
  userInfo?: IUserInfo;

  onLogout: () => void;
}

export default class TopNavigation extends React.Component<IProps> {
  public constructor(props: IProps) {
    super(props);
  }

  public render(): JSX.Element {
    const {navigation, userInfo, onLogout} = this.props;
    return (
      <StyledComponents.root>
        <StyledComponents.navLable>
          {userInfo
            ? `${i18n.t('library.hello')} ${userInfo.username}`
            : i18n.t('library.myApplication')}
        </StyledComponents.navLable>
        {userInfo ? (
          <StyledComponents.navLogoutButton onPress={onLogout}>
            <StyledComponents.textButton>
              {i18n.t('library.logout')}
            </StyledComponents.textButton>
          </StyledComponents.navLogoutButton>
        ) : (
          <StyledComponents.navLoginButton
            onPress={() => navigation.navigate('Login')}>
            <StyledComponents.textButton>
              {i18n.t('library.login')}
            </StyledComponents.textButton>
          </StyledComponents.navLoginButton>
        )}
      </StyledComponents.root>
    );
  }
}
