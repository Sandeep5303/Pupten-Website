import { combineReducers } from 'redux';
import puptenReducer from './puptenReducer';

export default combineReducers({
  pupten: puptenReducer,
});
