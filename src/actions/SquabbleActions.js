export const DELETE_SQUABBLE = 'DELETE_SQUABBLE';

export const deleteSquabble = (id) => {
  return {
    type: DELETE_SQUABBLE,
    id
  };
};

export const VOTE_SQUABBLE = 'VOTE_SQUABBLE';
export const voteSquabble = (id, side) => {
  return {
    type: VOTE_SQUABBLE,
    id,
    side
  };
};

export const UPDATE_SQUABBLE = 'UPDATE_SQUABBLE';
export const updateSquabble = (id, firebaseData) => {
  return {
    type: UPDATE_SQUABBLE,
    id: id,
    title: firebaseData.title,
    author: firebaseData.author,
    authorVotes: firebaseData.authorVotes,
    opposerVotes: firebaseData.opposerVotes,
    authorText: firebaseData.authorText,
    opposerText: firebaseData.opposerText,
    authorVoteUids: firebaseData.authorVoteUids,
    opposerVoteUids: firebaseData.opposerVoteUids,
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
    opposerText: firebaseData.opposerText,
    authorVoteUids: firebaseData.authorVoteUids,
    opposerVoteUids: firebaseData.opposerVoteUids,
  };
};
