import { firebase } from '../firebase';

export const VoteSquabbles = (id, side) => {
  return () => {
    console.log('Editing Squabble [' + id + '] ... vote [' + side + ']');
    const database = firebase.database();
    const squabbleRef = database.ref('squabbles/' + id );
    const uid = firebase.auth().currentUser.uid;

    if(side === 'author'){
      squabbleRef.transaction(function(squabble) {
        if (squabble) {
          if (!squabble.authorVoteUids) {
            squabble.authorVoteUids = {};
          }
          squabble.authorVoteUids[uid] = true;
          squabble.authorVotes++;
        }

        return squabble;
      });
    } else if(side === 'opposer'){
      squabbleRef.transaction(function(squabble) {
        if (squabble) {
          if (!squabble.opposerVoteUids) {
            squabble.opposerVoteUids = {};
          }
          squabble.opposerVoteUids[uid] = true;
          squabble.opposerVotes++;
        }

        return squabble;
      });
    }

  };
};
