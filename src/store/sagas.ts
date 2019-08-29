import {SagaIterator} from 'redux-saga';
import {all, fork} from 'redux-saga/effects';

import auth from './auth/sagas';

export default function* root(): SagaIterator {
  yield all([auth].map(fork));
}
