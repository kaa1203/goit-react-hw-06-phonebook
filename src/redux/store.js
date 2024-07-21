import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { combineReducers } from "@reduxjs/toolkit";
import { searchReducer } from "./searchSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
   contacts: contactsReducer,
   search: searchReducer
});


const persistConfig = {
   key: 'root',
   storage,
   whitelist: ['contacts'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
   // reducer: {
   //    contacts: contactsReducer,
   //    search: searchReducer
   // }
   reducer: persistedReducer,
   middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
});

export const persistor = persistStore(store);