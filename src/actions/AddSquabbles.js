import firebase from '../config/config';

export const AddSquabbles = (newSquabble) => {
  return (dispatch) => {
    console.log('Adding Squabble...');
    const database = firebase.database();
    const squabbles = database.ref('squabbles');

    const newSquabbleObj = squabbles.push(newSquabble);
    }
}
