import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from 'redux'

import authReducer from "./reducers/authReducer";
import postsReducer from "./reducers/postsReducer";
import usersReducer from "./reducers/usersReducer";

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
	auth: authReducer,
	posts: postsReducer,
	users: usersReducer	
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware => {
		const middlewares = getDefaultMiddleware()
		middlewares.prepend(thunk)
		return middlewares
	},
})

export const persistor = persistStore(store)
export type AppDispatch = typeof store.dispatch
export default store