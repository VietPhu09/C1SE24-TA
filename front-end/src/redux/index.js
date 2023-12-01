
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userSliceReducer from './userSlice';
import locationReducer from './locationSlice';
import tripReducer from './tripSlice';

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
  }
)

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer
});

export const persistor = persistStore(store);


