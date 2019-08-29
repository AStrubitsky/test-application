import React from 'react';
import {View} from 'react-native';
import i18n from '../../../internationalization/i18n';
import {Formik} from 'formik';
import * as StyledComponents from '../../common/commonStyledElements';
import {IUserInfo} from '../../home/homeComponent';
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';

export interface ILoginValues {
  email: string;
  password: string;
}

export interface IProps {
  loginInfo?: IUserInfo;
  loading?: boolean;
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;

  onSubmit: (value: ILoginValues) => void;
}

const loginInitialValues: ILoginValues = {
  email: '',
  password: '',
};

export default class Login extends React.Component<IProps> {
  private handleFormSubmit = (values: ILoginValues): void => {
    const {onSubmit} = this.props;

    onSubmit(values);
  };

  private render(): JSX.Element {
    const {
      loginInfo,
      navigation: {navigate},
    } = this.props;
    if (loginInfo) {
      navigate('Home');
    }
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <StyledComponents.pageTitle>
          {i18n.t('library.loginTitle')}
        </StyledComponents.pageTitle>
        <Formik<ILoginValues>
          initialValues={loginInitialValues}
          onSubmit={this.handleFormSubmit}>
          {({
            values,
            handleChange,
          }: {
            values: ILoginValues;
            handleChange: (text: string) => () => void;
          }) => (
            <View>
              <StyledComponents.inputLabel>
                {i18n.t('library.emailLabel')}
              </StyledComponents.inputLabel>
              <StyledComponents.input
                value={values.email}
                onChangeText={handleChange('email')}
                placeholder={i18n.t('library.emailPlaceholder')}
              />
              <StyledComponents.inputLabel>
                {i18n.t('library.passwordLabel')}
              </StyledComponents.inputLabel>
              <StyledComponents.input
                value={values.password}
                onChangeText={handleChange('password')}
                placeholder={i18n.t('library.passwordPlaceholder')}
                secureTextEntry={true}
              />
              <StyledComponents.button
                onPress={() => this.handleFormSubmit(values)}>
                <StyledComponents.buttonText>
                  {i18n.t('library.login')}
                </StyledComponents.buttonText>
              </StyledComponents.button>
            </View>
          )}
        </Formik>
      </View>
    );
  }
}
