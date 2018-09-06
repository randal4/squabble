export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const loginSuccess = (user) => {
  return {
    type: LOGIN_SUCCESS,
    user
  };
};

export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const loginFailure = (error) => {
  return {
    type: LOGIN_FAILURE,
    error
  };
};

export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const logoutSuccess = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};