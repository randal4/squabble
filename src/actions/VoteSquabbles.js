import { firebase } from '../firebase';
import { voteSquabble } from './SquabbleActions';

export const VoteSquabbles = (id, side) => {
  return (dispatch) => {
    console.log('Editing Squabble [' + id + '] ... vote [' + side + ']');
    const database = firebase.database();
    const squabbleRef = database.ref('squabbles/' + id );
    const uid = firebase.auth().currentUser.uid;

    //console.log(squabble);
    //squabble.update({authorVotes: squabble.authorVotes++});
    //dispatch(voteSquabble(id, side));
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
  };
};
