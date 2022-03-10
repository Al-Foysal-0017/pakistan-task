import axios from "axios";
import * as api from "../../api";

import {
  SET_LOADER,
  CLOSE_LOADER,
  SET_TOKEN,
  REGISTER_ERRORS,
  LOGIN_ERRORS,
} from "../types";

export const postRegister = (state) => {
  return async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    dispatch({ type: SET_LOADER });
    try {
      const { data } = await axios.post(
        "https://calm-tor-08687.herokuapp.com/register",
        state,
        config
      );
      console.log("RegisterData:", data);
      dispatch({ type: CLOSE_LOADER });
      localStorage.setItem("myToken", data.token);
      dispatch({ type: SET_TOKEN, payload: data.token });
    } catch (error) {
      dispatch({ type: CLOSE_LOADER });
      dispatch({
        type: REGISTER_ERRORS,
        payload: error.response.data.errors,
      });
    }
  };
};

export const postLogin = (post) => async (dispatch) => {
  try {
    dispatch({ type: SET_LOADER });
    const { data } = await api.createPost(post);
    dispatch({ type: CLOSE_LOADER });
    localStorage.setItem("myToken", data.token);
    dispatch({ type: SET_TOKEN, payload: data.token });
    console.log("RES:", data);
  } catch (error) {
    dispatch({ type: CLOSE_LOADER });
    dispatch({ type: LOGIN_ERRORS, payload: error.response.data.errors });
  }
};
