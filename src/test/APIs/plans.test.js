import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import { getPlans } from '../../redux';
import plans from '../jsonData/plans.json';
import { GET_PLANS_FAILURE, GET_PLANS_SUCCESS, GET_PLANS_REQUEST } from '../../redux/plans/houseplanTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Fetching houseplans data from API', () => {
  test('Successfully fetches all houseplans from API', () => {
    axios.get.mockImplementationOnce(() => Promise.resolve({
      data: {
        results: plans,
      },
    }));
    const store = mockStore([]);
    store
      .dispatch(getPlans())
      .then(() => {
        const action = store.getActions();
        expect(action[0].type).toBe(GET_PLANS_REQUEST);
        expect(action[1].type).toBe(GET_PLANS_SUCCESS);
        expect(action[1].payload).toEqual({ results: plans });
      });
  });

  test('Erroneously fetching plans data from the API', () => {
    const errorMessage = 'Error fetching plans data from API';
    axios.get.mockImplementationOnce(() => Promise.reject(new Error(errorMessage)));

    const store = mockStore([]);
    store
      .dispatch(getPlans())
      .then(() => {
        const action = store.getActions();
        expect(action[0].type).toBe(GET_PLANS_REQUEST);
        expect(action[1].type).toBe(GET_PLANS_FAILURE);
        expect(action[1].payload).toEqual(errorMessage);
      });
  });
});
