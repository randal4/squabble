/*eslint no-unused-vars: ["error", { "args": "none"}]*/
//import { auth } from '../firebase';
import { loginSuccess } from './AuthenticationActions';

const mockUser = {
  'email': 'test@test.com',
  'isAnonymous' : 'false',
  'uid' : '123123123',
};

export const UserLogin = (email, password) => {
  return (dispatch) => {
    /*auth.doSignInWithEmailAndPassword(email, password)
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
  */
    dispatch(loginSuccess(mockUser));
  };
  
};
