import { GET_PLAN_FAILURE, GET_PLAN_SUCCESS, GET_PLAN_REQUEST } from './planTypes';

const initialState = {
  loading: true,
  data: [],
  errorMsg: '',
};

const planReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PLAN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_PLAN_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        errorMsg: '',
      };
    case GET_PLAN_FAILURE:
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

export default planReducer;
