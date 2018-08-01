import firebase from '../config/config';
import { deleteSquabble } from './SquabbleActions';

export const DeleteSquabble = (id) => {
  return (dispatch) => {
    console.log('Deleting Squabble [' + id + '] ...');
    const database = firebase.database();
    const squabbles = database.ref('squabbles/' + id );

    squabbles.remove();
    dispatch(deleteSquabble(id));
  };
};
