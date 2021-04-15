import { takeLatest } from 'redux-saga/effects';
import { PlaygroundActionTypes } from '../../constants';
export default function* playgroundSaga() {
  yield takeLatest(PlaygroundActionTypes.ADD_PLAYGROUND, createPlayground);
}

function* createPlayground() {

}