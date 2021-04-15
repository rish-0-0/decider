import {combineReducers} from 'redux';
import playerReducer from './player-reducer';
import playgroundReducer from './playground-reducer';

export default combineReducers({playerReducer, playgroundReducer});
