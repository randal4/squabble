import firebase from '../config/config';
import { addSquabble, deleteSquabble } from './SquabbleActions';

export const FetchSquabbles = () => {
  return (dispatch) => {
    console.log('Fetching Squabbles...');
    const database = firebase.database();
    const squabbles = database.ref('squabbles');

    squabbles.on('child_added', (snapshot) => {
      dispatch(addSquabble(snapshot.key, snapshot.val()));
    });
    squabbles.on('child_removed', (snapshot) => {
      dispatch(deleteSquabble(snapshot.key));
    });

  };
};
