import {SagaIterator} from 'redux-saga';
import {all, put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';

import config from '../../../config';

import * as actions from './actions';
import {LoginSuccessPayload} from './types';

export function* login(
  action: ReturnType<typeof actions.login.request>,
): SagaIterator {
  try {
    const {email, password} = action.payload;

    const response: LoginSuccessPayload = yield axios.post(
      `${config.serverApi}/login/`,
      {email, password},
    );

    yield put(actions.login.success(response));
  } catch (error) {
    yield put(actions.login.failure(error));
  }
}

export function* logout(
  action: ReturnType<typeof actions.logout.request>,
): SagaIterator {
  try {
    const response: void = yield axios.post(
      `${config.serverApi}/logout/`,
      undefined,
    );

    yield put(actions.logout.success(response));
  } catch (error) {
    yield put(actions.logout.failure(error));
  }
}

export default function* root(): SagaIterator {
  yield all([
    takeLatest(actions.login.request, login),
    takeLatest(actions.logout.request, logout),
  ]);
}
