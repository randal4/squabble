import { firebase } from '../firebase';
import { addSquabble, deleteSquabble, updateSquabble } from './SquabbleActions';

export const FetchSquabbles = () => {
  return (dispatch) => {
    console.log('Fetching Squabbles...');
    console.log(firebase);
    const database = firebase.database();
    const squabbles = database.ref('squabbles');

    squabbles.on('child_added', (snapshot) => {
      dispatch(addSquabble(snapshot.key, snapshot.val()));
    });

    squabbles.on('child_removed', (snapshot) => {
      dispatch(deleteSquabble(snapshot.key));
    });

    squabbles.on('child_changed', (snapshot) => {
      dispatch(updateSquabble(snapshot.key, snapshot.val()));
    });
  };
};
