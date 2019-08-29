import {getType} from 'typesafe-actions';

import * as actions from './actions';
import {Action, IAuthState} from './types';

export const initialState: IAuthState = {
  loading: false,
};

const auth = (state: IAuthState = initialState, action: Action): IAuthState => {
  switch (action.type) {
    case getType(actions.login.request):
    case getType(actions.logout.request):
      return {
        ...state,
        loading: true,
      };
      break;

    case getType(actions.login.success): {
      const {username, email} = action.payload.data;
      console.log('action.payload = ', action.payload);
      return {
        ...state,
        loginData: {username, email},
        loading: false,
      };
      break;
    }
    case getType(actions.logout.success): {
      return {
        ...state,
        loginData: undefined,
        loading: false,
      };
      break;
    }

    case getType(actions.login.failure):
    case getType(actions.logout.failure):
      return {
        ...state,
        loading: false,
      };
      break;

    default:
      return state;
      break;
  }
};

export default auth;
