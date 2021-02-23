import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import { getFavourites } from '../../redux';
import favourites from '../jsonData/favourites.json'
import { GET_FAVOURITES_FAILURE,GET_FAVOURITES_REQUEST,GET_FAVOURITES_SUCCESS} from '../../redux';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Fetching user favourites from API', () => {
  test('Successfully fetches all user favourites from API', () => {
    axios.get.mockImplementationOnce(() => Promise.resolve({
      data: {
        results: favourites,
      },
    }));
    const store = mockStore([]);
    store
      .dispatch(getFavourites())
      .then(() => {
        const action = store.getActions();
        expect(action[1].payload).toEqual({ results: favourites});
      });
  })

  test('Erroneously fetching user favourites data from the API', () => {
    const errorMessage = 'Error fetching user favourites';
    axios.get.mockImplementationOnce(() => Promise.reject(new Error(errorMessage)));

    const store = mockStore([]);
    store
      .dispatch(getFavourites())
      .then(() => {
        const action = store.getActions();
        expect(action[1].payload).toEqual(errorMessage);
      });
  });
})
