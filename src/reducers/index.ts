import { combineReducers } from 'redux';
import counterReducers from './counter';

const rootReducer = combineReducers({
  counterReducers
});

export default rootReducer;
