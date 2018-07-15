export const DELETE_SQUABBLE = 'DELETE_SQUABBLE';

export const deleteSquabble = (id, params) => {
  return {
    type: DELETE_SQUABBLE,
    id
  }
}
