import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contactsSlice";
import filtersReducer from "./filtersSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

const persisConfig = {
    key: "root",
    storage,
}

export const store = configureStore({
    reducer: {
        contacts: persistReducer(persisConfig, contactsReducer), filters: filtersReducer,
    },
    middleware: getDEfaultMiddleware => getDEfaultMiddleware({
        serializableCheck: {
            ignoreActions: [FLUSH,
                REHYDRATE,
                PAUSE,
                PERSIST,
                PURGE,
                REGISTER,]
        }
    })
});

export const persistor = persistStore(store);