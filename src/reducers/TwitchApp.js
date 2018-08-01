const initialState = {
  status: '',
  streams: [],
  error: ''
};

function TwitchApp(state=initialState, action){
  switch(action.type){
    case 'FETCH_REQUEST':
      return Object.assign({}, state, {
        status: action.status
      });
    case 'FETCH_SUCCESS':
      return  Object.assign({}, state, {
        status: action.status,
        streams: action.streams
      });
    case 'FETCH_FAILURE':
      return  Object.assign({}, state, {
        status: action.status,
        error: action.error
      });
    default:
      return state;
  }
}

export default TwitchApp;
