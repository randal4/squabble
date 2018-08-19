const initialState = {
  squabbles: []
};

function SquabbleApp(state = initialState, action) {
  switch (action.type) {
    case 'DELETE_SQUABBLE':
      console.log('Deleting Squabble:' + action.id);
      return {
        ...state,
        squabbles: state.squabbles.filter(sq =>
          sq.id !== action.id
        )
      };
    case 'VOTE_SQUABBLE':
      console.log('Voting Squabble: ' + action.id + ' Side: ' + action.side);
      return {
        
      };
    case 'ADD_SQUABBLE':
      console.log('Adding Squabble');
      return {
        ...state,
        squabbles: state.squabbles.concat({
          id: action.id,
          title: action.title,
          author: action.author,
          authorVotes: action.authorVotes,
          opposerVotes: action.opposerVotes,
          authorText: action.authorText,
          opposerText: action.opposerText
        })
      };
    default:
      return state;
  }
}

export default SquabbleApp;
