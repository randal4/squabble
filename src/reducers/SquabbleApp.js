const initialState = {
  squabbles: []
};

function SquabbleApp(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      console.log('User Login Success: ' + action.user.email);
      return {
        ...state,
        currentUser: action.user
      };
    case 'LOGIN_FAILURE':
      console.log('User Login failure: ' + action.error);
      return {
        ...state,
        currentUser: false,
        error: action.error
      };
    case 'DELETE_SQUABBLE':
      console.log('Deleting Squabble: ' + action.id);
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
    case 'UPDATE_SQUABBLE':
      console.log('Updating Squabble: ' + action.id);

      return {
        ...state,
        squabbles: state.squabbles.map((item) => {
          if(item.id === action.id){
            return {
              id: action.id,
              title: action.title,
              author: action.author,
              authorVotes: action.authorVotes,
              opposerVotes: action.opposerVotes,
              authorText: action.authorText,
              opposerText: action.opposerText,
              authorVoteUids: action.authorVoteUids,
              opposerVoteUids: action.opposerVoteUids,
            };
          }
  
          return item; 
        }),
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
          opposerText: action.opposerText,
          authorVoteUids: action.authorVoteUids,
          opposerVoteUids: action.opposerVoteUids,
        })
      };
    default:
      return state;
  }
}

export default SquabbleApp;
