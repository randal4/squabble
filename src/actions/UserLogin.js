import { auth } from '../firebase';
import { loginSuccess, loginFailure } from './AuthenticationActions';

export const UserLogin = (email, password) => {
  return (dispatch) => {
    auth.doSignInWithEmailAndPassword(email, password)
      .then((e) => {
        const user = {
          'email': e.user.email,
          'isAnonymous': e.user.isAnonymous,
          'uid' : e.user.uid,
        };

        dispatch(loginSuccess(user));
      })
      .catch(error =>{
        dispatch(loginFailure(error));
      });
  };
};
