import * as constant from '../constants/postConstants';

export const postListReducer = (state = { posts: [] }, action) => {
  const { type, payload } = action;

  switch (type) {
    case constant.POST_LIST_REQUEST:
      return {
        loading: true,
        posts: [],
      };
    case constant.POST_LIST_SUCCESS:
      return {
        loading: false,
        posts: payload,
      };
    case constant.POST_LIST_FAIL:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const postCreateReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case constant.POST_CREATE_REQUEST:
      return {
        loading: true,
      };
    case constant.POST_CREATE_SUCCESS:
      return {
        loading: false,
        post: payload,
        success: true,
      };
    case constant.POST_CREATE_FAIL:
      return {
        loading: false,
        error: payload,
      };
    case constant.POST_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const postDeleteReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case constant.POST_DELETE_REQUEST:
      return {
        loading: true,
      };
    case constant.POST_DELETE_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case constant.POST_DELETE_FAIL:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
