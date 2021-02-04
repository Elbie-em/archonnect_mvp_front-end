import { combineReducers } from 'redux';
import houseplanReducer from './plans/houseplanReducer'

const rootReducer = combineReducers({
  plans:houseplanReducer,
});

export default rootReducer;