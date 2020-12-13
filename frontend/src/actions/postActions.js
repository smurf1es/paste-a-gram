import * as constant from '../constants/postConstants';
import axios from 'axios';

export const listPosts = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: constant.POST_LIST_REQUEST,
    });

    const {
      userLogin: { userCred },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userCred.token}`,
      },
    };

    const { data } = await axios.get('/api/posts', config);

    dispatch({
      type: constant.POST_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: constant.POST_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createPost = (image, text) => async (dispatch, getState) => {
  try {
    dispatch({
      type: constant.POST_CREATE_REQUEST,
    });

    const {
      userLogin: { userCred },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userCred.token}`,
      },
    };

    const { data } = await axios.post('/api/posts', { image, text }, config);

    dispatch({
      type: constant.POST_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: constant.POST_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deletePost = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: constant.POST_DELETE_REQUEST,
    });

    const {
      userLogin: { userCred },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userCred.token}`,
      },
    };

    await axios.delete(`/api/posts/${id}`, config);

    dispatch({
      type: constant.POST_DELETE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: constant.POST_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
