import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import cartReducer from './cartSlice';
import colorReducer from './colorSlice';

const persistConfig = {
    key: 'shoppingCart',
    storage,
}

const persistedCartReducer = persistReducer(persistConfig, cartReducer);
const persistedColorReducer = persistReducer(persistConfig, colorReducer);

// Part2: Combine Reducers and Create a Store
export const store = configureStore({
    reducer: {
        cart: persistedCartReducer,
        color: persistedColorReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            thunk: true,
            serializableCheck: {
                // 如果用 redux-persist，需要忽略這些 action
                ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
            },
        }),
});


export const persistor = persistStore(store);