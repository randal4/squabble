export const FETCH_REQUEST = 'FETCH_REQUEST';

export const FetchRequest = () => {
  console.log("0 seconds in");
  const FETCH_REQUEST_OBJ = {
    type: FETCH_REQUEST,
    status: "loading"
  };
  return (dispatch) => {
    setTimeout(() => {
        console.log("2 seconds in");
        dispatch(FETCH_REQUEST_OBJ);
      }, 2000)
  };
}
