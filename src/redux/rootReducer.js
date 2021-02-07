import { combineReducers } from 'redux';
import loggedInReducer from './sessions/loggedInReducer'
import houseplanReducer from './plans/houseplanReducer'

const rootReducer = combineReducers({
  loggedIn: loggedInReducer,
  plans:houseplanReducer,
});

export default rootReducer;