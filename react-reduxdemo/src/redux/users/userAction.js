import {
  FETCH_USER_REQUEST,
  FETCH_USER_FAILURE,
  FETCH_USER_SUCCESS,
} from "./usersType";
import axios from "axios";

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const users = res.data;
        dispatch(fetchSuccess(users));
      })
      .catch((error) => {
        error = error.message;
        dispatch(fetchFailure(error.message));
      });
  };
};

export const fetchRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};

export const fetchSuccess = (users) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users,
  };
};

export const fetchFailure = (error) => {
  return {
    type: FETCH_USER_FAILURE,
    payload: error,
  };
};
