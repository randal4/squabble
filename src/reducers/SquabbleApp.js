const initialState = {
  squabbles : [
    {
      id: 1,
      header: "Squabble Uno",
      description: "This is the very first squabble.  Vote accordingly."
    },
    {
      id: 2,
      header: "Squabble Dos",
      description: "This is the second squabble.  Vote now."
    },
    {
      id: 3,
      header: "Squabble Tres",
      description: "This is the third squabble.  Vote now."
    }
  ]
}

function SquabbleApp (state = initialState, action){
  switch (action.type) {
      case 'DELETE_SQUABBLE':
          console.log("Deleting Squabble:" + action.id);
          // state.squabbles = state.squabbles.filter(sq =>
          //     sq.id !== action.id
          // );
          return {
            ...state,
            squabbles: state.squabbles.filter(sq =>
                sq.id !== action.id
            )
          }
      default:
          return state
  }
}

export default SquabbleApp
