import {ActionType} from 'typesafe-actions';

import {ILoginValues} from '../../components/auth/login/loginComponent';
import {IUserInfo} from '../../components/home/homeComponent';
import * as actions from './actions';

export interface IAuthState {
  loginData?: LoginSuccessPayload;
  loading: boolean;
}

export type LoginActionRequestPayload = ILoginValues;

export type LoginActionSuccessPayload = {
  data: IUserInfo;
};

export type LoginSuccessPayload = IUserInfo;

export type Action = ActionType<typeof actions>;
