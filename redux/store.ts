import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers/root-reducer';
import saga from './sagas/root-saga';
const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(saga);

export type RootReducerType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;