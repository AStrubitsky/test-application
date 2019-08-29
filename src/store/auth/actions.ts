import {createAsyncAction} from 'typesafe-actions';

import {LoginActionRequestPayload, LoginActionSuccessPayload} from './types';

export const login = createAsyncAction(
  'LOGIN_REQUEST',
  'LOGIN_SUCCESS',
  'LOGIN_FAILURE',
)<LoginActionRequestPayload, LoginActionSuccessPayload, Error>();

export const logout = createAsyncAction(
  'LOGOUT_REQUEST',
  'LOGOUT_SUCCESS',
  'LOGOUT_FAILURE',
)<void, void, Error>();
