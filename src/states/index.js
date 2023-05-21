/**
 * @TODO: Create Redux store
 */
import { configureStore } from '@reduxjs/toolkit';
import isPreloadReducers from './isPreload/reducer';
import authUserReducers from './authUser/reducer';
import usersReducer from './users/reducer';
import talksReducer from './talks/reducer';
import talkDetailReducers from './talkDetail/reducer';

const store = configureStore({
  reducer: {
    isPreload: isPreloadReducers,
    authUser: authUserReducers,
    users: usersReducer,
    talks: talksReducer,
    talkDetail: talkDetailReducers,
  },
});

export default store;
