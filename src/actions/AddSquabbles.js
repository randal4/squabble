import firebase from '../config/config';

export const AddSquabbles = (newSquabble) => {
  return () => {
    console.log('Adding Squabble...');
    const database = firebase.database();
    const squabbles = database.ref('squabbles');

    squabbles.push(newSquabble);
  };
};
