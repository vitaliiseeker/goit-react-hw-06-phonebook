// import { createStore, combineReducers } from "redux";
// import { contactsReduser } from "./contacts/contactsReducers";
// import { devToolsEnhancer } from "@redux-devtools/extension";

// const enhancer = devToolsEnhancer()

// const rootReducer = combineReducers({ contacts: contactsReduser });

// export const store = createStore(rootReducer, enhancer);

import { configureStore } from '@reduxjs/toolkit';
// import { contactsReduser } from './contacts/contactsReducers';
import contactsReduser from './contacts/contactsSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'contacts',
  storage,
};

const persistedReducer = persistReducer(persistConfig, contactsReduser);

export const store = configureStore({
  reducer: {
    contacts: persistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);