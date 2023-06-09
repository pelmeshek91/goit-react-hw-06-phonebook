import { configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import contactsReducer from './contactsSlice';

const persistTodoConfig = {
  key: 'contacts',
  version: 1,
  storage,
  blacklist: ['filter'],
};

const persistedContactsReducer = persistReducer(
  persistTodoConfig,
  contactsReducer
);

export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
