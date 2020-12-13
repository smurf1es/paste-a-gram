import * as constant from '../constants/userConstants';

export const userRegisterReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case constant.USER_REGISTER_REQUEST:
      return {
        loading: true,
      };
    case constant.USER_REGISTER_SUCCESS:
      return {
        loading: false,
        userCred: payload,
      };
    case constant.USER_REGISTER_FAIL:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const userLoginReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case constant.USER_LOGIN_REQUEST:
      return {
        loading: true,
      };
    case constant.USER_LOGIN_SUCCESS:
      return {
        loading: false,
        userCred: payload,
      };
    case constant.USER_LOGIN_FAIL:
      return {
        loading: false,
        error: payload,
      };
    case constant.USER_LOGOUT:
      return {};
    default:
      return state;
  }
};
