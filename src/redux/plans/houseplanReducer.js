import { GET_PLANS_FAILURE, GET_PLANS_SUCCESS, GET_PLANS_REQUEST } from './houseplanTypes';

const initialState = {
  loading: true,
  data: [],
  errorMsg: '',
};

const houseplanReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PLANS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_PLANS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        errorMsg: '',
      };
    case GET_PLANS_FAILURE:
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

export default houseplanReducer;
