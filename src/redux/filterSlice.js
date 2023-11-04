const initialState = {
  filter: '',
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'filter/setFilter':
      return {
        ...state,
        filter: action.payload,
      };

    default:
      return state;
  }
};

export const setFilter = value => {
  return {
    type: 'filter/setFilter',
    payload: value,
  };
};