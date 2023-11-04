import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: '',
  },
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { setFilter } = filterSlice.actions;

// export const filterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'filter/setFilter':
//       return {
//         ...state,
//         filter: action.payload,
//       };

//     default:
//       return state;
//   }
// };

// export const setFilter = value => {
//   return {
//     type: 'filter/setFilter',
//     payload: value,
//   };
// };

// export const setFilter = createAction('filter/setFilter');
// export const filterReducer = createReducer(initialState, builder =>
//   builder.addCase(setFilter, (state, action) => {
//     state.filter = action.payload;
//   })
// );

const initialState = {
  filter: '',
};
