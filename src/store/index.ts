import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import userReducer from './reducers/UserSlice.ts'
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import {tasksAPI} from '../services/TasksService.ts';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['userReducer'],
    blacklist: [tasksAPI.reducerPath]
}

const rootReducer = combineReducers({
    userReducer,
    [tasksAPI.reducerPath]: tasksAPI.reducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const setupStore = () => {
    return configureStore({
        reducer: persistedReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                },
            }).concat(tasksAPI.middleware)
    })
}

export default () => {
    const store = setupStore()
    const persistor = persistStore(store)
    return {store, persistor}
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
