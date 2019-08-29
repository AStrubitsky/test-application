import {Action as AuthAction, IAuthState} from './auth/types';

export interface IRootState {
  auth: IAuthState;
}

export type RootAction = AuthAction;
