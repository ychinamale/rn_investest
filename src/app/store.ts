import {configureStore} from '@reduxjs/toolkit';
import {profileReducer, PROFILE_SLICE} from '../features/profile';

export const store = configureStore({
  reducer: {
    [PROFILE_SLICE]: profileReducer,
  },
});
