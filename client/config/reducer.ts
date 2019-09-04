import { combineReducers } from 'redux';
import global from '../views/duck';
import root from '../views/root/duck';
import project from '../views/project/duck';

export const rootReducer = combineReducers({
  root,
  project,
  global,
});
