import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export const SLICE_NAME = 'profile';

interface ProfileState {
  name: string;
}

const initialState: ProfileState = {
  name: 'Visitor',
};

export const profileSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    updateName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

export const {reducer} = profileSlice;
export const {updateName} = profileSlice.actions;

interface RootState {
  [SLICE_NAME]: ProfileState;
}

export const selectName = (state: RootState) => state[SLICE_NAME].name;
