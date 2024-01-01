
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userSliceReducer from './userSlice';
import locationReducer from './locationSlice';
import tripReducer from './tripSlice';
import myTripReducer from './mytripSlice'

const persistConfig = {
  key: 'root',
  version:1,
  storage
};

const rootReducer = combineReducers(
  {
    user: userSliceReducer,
    location: locationReducer,
    tripCreate: tripReducer,
    myTrip: myTripReducer
  }
)

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer
});

export const persistor = persistStore(store);


