import { GET_FAVOURITES_FAILURE, GET_FAVOURITES_SUCCESS, GET_FAVOURITES_REQUEST } from './favouritesTypes';

const initialState = {
  loading: true,
  data: [],
  errorMsg: '',
};

const favouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FAVOURITES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_FAVOURITES_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        errorMsg: '',
      };
    case GET_FAVOURITES_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],
        errorMsg: action.payload,
      };
    default:
      return state;
  }
};

export default favouriteReducer;
