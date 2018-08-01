
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FetchSuccess = (streams) => {
  return {
    type: FETCH_SUCCESS,
    status: 'success',
    streams
  };
};
