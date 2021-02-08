import { combineReducers } from 'redux';
import loggedInReducer from './sessions/loggedInReducer'
import houseplanReducer from './plans/houseplanReducer'
import planReducer from './plan/planReducer';

const rootReducer = combineReducers({
  loggedIn: loggedInReducer,
  plans:houseplanReducer,
  plan: planReducer
});

export default rootReducer;