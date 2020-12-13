import axios from 'axios';
import * as constant from '../constants/userConstants';
import { POST_LIST_RESET } from '../constants/postConstants';

export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({
      type: constant.USER_REGISTER_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post(
      '/api/users',
      { name, email, password },
      config
    );

    dispatch({
      type: constant.USER_REGISTER_SUCCESS,
      payload: data,
    });

    dispatch({
      type: constant.USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem('userCred', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: constant.USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: constant.USER_LOGIN_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post(
      '/api/users/login',
      { email, password },
      config
    );

    dispatch({
      type: constant.USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem('userCred', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: constant.USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('userCred');
  dispatch({ type: constant.USER_LOGOUT });
};
