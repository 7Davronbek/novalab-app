import axios from "axios";
import { toast } from "react-toastify";
import { API_PATH, UPDATE_STATE } from "../types/loginTypes";

export const updateState = (state) => {
  return {
    type: UPDATE_STATE,
    payload: state,
  };
};

export const getUser = () => (dispatch) => {
  dispatch(updateState({ isLoading: true }));
  axios
    .get(API_PATH + "api/users?page=1")
    .then((res) => {
      dispatch(updateState({ users: res.data.data }));
    })
    .catch((err) => {
      toast.error("Error! Something get wrong, please check your network");
    });
};

export const getSingleUser = (params) => (dispatch) => {
  dispatch(updateState({ isLoading: true }));

  axios
    .get(API_PATH + `api/users/${params}`)
    .then((res) => {
      dispatch(updateState({ user: res.data.data, userInfo: res.data.support }));
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
