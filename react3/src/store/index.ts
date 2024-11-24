import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import authReducer from "./reducers/authReducer";
import postsReducer from "./reducers/postsReducer";

const rootReducer = {
	auth: authReducer,
	posts: postsReducer	
}

const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware => {
		const middlewares = getDefaultMiddleware()
		middlewares.prepend(thunk)
		return middlewares
	},
})

export default store
export type AppDispatch = typeof store.dispatch