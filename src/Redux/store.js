import { combineReducers, configureStore } from "@reduxjs/toolkit"
import userReducer from "./userSlice"
import cartReducer from "./cartSlice"
import compareReducer from "./compareProductSlice"
import productReducer from "./productSlice"

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    expire: 7 * 24 * 60 * 60 * 1000, // 7 days in milliseconds
}


const rootReducer = combineReducers({
    user: userReducer, 
    product: productReducer, 
    usercart: cartReducer,
    compare: compareReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            // Ignore these field paths in all actions
            ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
            // Ignore these paths in the state
            ignoredPaths: ['items.dates'],
        },
    }),
})


export const persistor = persistStore(store)