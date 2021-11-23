import {
  FETCH_USER_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
} from "./usersType";

const initialState = {
  isLoading: false,
  users: [],
  error: "",
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_USER_SUCCESS:
      return {
        isLoading: false,
        users: action.payload,
        error: "",
      };
    case FETCH_USER_FAILURE:
      return {
        isLoading: false,
        users: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default UserReducer;
