export const FETCH_FAILURE = 'FETCH_FAILURE';

export const FetchFailure = (error) => {
  return {
    type: FETCH_FAILURE,
    status: "error",
    error
  }
}
