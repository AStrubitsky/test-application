import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

import AppNavigator from './src/components/router/route';
import {runSaga, sagaMiddleware} from './src/store/saga';
import sagas from './src/store/sagas';
import initialReducer from './src/store/reducer';

const store = createStore(initialReducer, applyMiddleware(sagaMiddleware));
runSaga(sagas);

const App: React.FC = (): JSX.Element => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
