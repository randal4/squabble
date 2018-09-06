import { auth } from '../firebase';
import { logoutSuccess } from './AuthenticationActions';

export const UserLogout = () => {
  return (dispatch) => {
    auth.doSignOut()
      .then(() => {
        dispatch(logoutSuccess());
      });
  };
  
};
