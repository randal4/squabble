export const DELETE_SQUABBLE = 'DELETE_SQUABBLE';

export const deleteSquabble = (id, params) => {
  return {
    type: DELETE_SQUABBLE,
    id
  }
}

export const ADD_SQUABBLE = 'ADD_SQUABBLE';
export const addSquabble = (id, header, description, params) => {
  return {
    type: ADD_SQUABBLE,
    id,
    header,
    description
  }
}
