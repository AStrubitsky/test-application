import createSagaMiddleware, {Saga, Task} from 'redux-saga';

export const sagaMiddleware = createSagaMiddleware();

export const runSaga = (saga: Saga): Task => sagaMiddleware.run(saga);
