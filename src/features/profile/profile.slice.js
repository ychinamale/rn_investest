import {createSlice} from '@reduxjs/toolkit';

export const SLICE_NAME = 'profile';

const initialState = {
  name: 'Visitor',
};

export const profileSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    updateName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const {reducer} = profileSlice;

export const {updateName} = profileSlice.actions;

// Selectors
export const selectName = state => state.name;
