export const DELETE_SQUABBLE = 'DELETE_SQUABBLE';

export const deleteSquabble = (id) => {
  return {
    type: DELETE_SQUABBLE,
    id
  };
};

export const ADD_SQUABBLE = 'ADD_SQUABBLE';
export const addSquabble = (id, firebaseData) => {
  return {
    type: ADD_SQUABBLE,
    id: id,
    title: firebaseData.title,
    author: firebaseData.author,
    authorVotes: firebaseData.authorVotes,
    opposerVotes: firebaseData.opposerVotes,
    authorText: firebaseData.authorText,
    opposerText: firebaseData.opposerText
  };
};
