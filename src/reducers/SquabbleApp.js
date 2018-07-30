const initialState = {
    squabbles: []
}
/*   squabbles : [
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
} */

function SquabbleApp (state = initialState, action){
  switch (action.type) {
      case 'DELETE_SQUABBLE':
          console.log("Deleting Squabble:" + action.id);
          return {
            ...state,
            squabbles: state.squabbles.filter(sq =>
                sq.id !== action.id
            )
          }
      case 'ADD_SQUABBLE':
        console.log("Adding Squabble");
        return {
          ...state,
          squabbles: state.squabbles.concat({
            id: action.id,
            title: action.title,
            author: action.author
          })
        }
      default:
          return state
  }
}

export default SquabbleApp
