import { combineReducers } from 'redux';
import loggedInReducer from './sessions/loggedInReducer'
import houseplanReducer from './plans/houseplanReducer'
import planReducer from './plan/planReducer';
import favouriteRedcuer from './favourites/favouriteReducer'

const rootReducer = combineReducers({
  loggedIn: loggedInReducer,
  plans:houseplanReducer,
  plan: planReducer,
  favourites: favouriteRedcuer,
});

export default rootReducer;