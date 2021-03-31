import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import { checkLoggedInStatus } from '../../redux';
import { CHECK_LOGGED_IN_FAILURE, CHECK_LOGGED_IN_REQUEST, CHECK_LOGGED_IN_SUCCESS } from '../../redux/sessions/loggedInTypes';
import loggedInStatus from '../jsonData/loggedInStatus.json';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('API Authentication Test', () => {
  test('Successfully returns user data after returning TRUE logged in status from API', () => {
    axios.get.mockImplementationOnce(() => Promise.resolve({
      data: {
        results: loggedInStatus,
      },
    }));
    const store = mockStore([]);
    store
      .dispatch(checkLoggedInStatus())
      .then(() => {
        const action = store.getActions();
        expect(action[0].type).toBe(CHECK_LOGGED_IN_REQUEST);
        expect(action[1].type).toBe(CHECK_LOGGED_IN_SUCCESS);
        expect(action[1].payload).toEqual({ results: loggedInStatus });
      });
  });

  test('Erroneously fetches data from the API', () => {
    const errorMessage = 'Error fetching data from API';
    axios.get.mockImplementationOnce(() => Promise.reject(new Error(errorMessage)));

    const store = mockStore([]);
    store
      .dispatch(checkLoggedInStatus())
      .then(() => {
        const action = store.getActions();
        expect(action[0].type).toBe(CHECK_LOGGED_IN_REQUEST);
        expect(action[1].type).toBe(CHECK_LOGGED_IN_FAILURE);
        expect(action[1].payload).toEqual(errorMessage);
      });
  });
});
