import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../app/store';

interface ProfileState {
  name: string;
}

export const SLICE_NAME = 'profile';

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

export const selectName = (state: RootState) => state[SLICE_NAME].name;
