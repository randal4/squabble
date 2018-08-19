import { firebase } from '../firebase';
import { deleteSquabble } from './SquabbleActions';

export const DeleteSquabble = (id) => {
  return (dispatch) => {
    console.log('Deleting Squabble [' + id + '] ...');
    const database = firebase.database();
    const squabble = database.ref('squabbles/' + id );

    squabble.remove();
    dispatch(deleteSquabble(id));
  };
};
