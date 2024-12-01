import { createSlice } from "@reduxjs/toolkit"

export const LOGIN = 'LOGIN'

const auth = createSlice({
	name: 'auth',
	initialState: {
		username: 'hello',
		password: '',
		isLoggedIn: false,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(LOGIN, (state, action: any) => {
			state.username = action.username
			state.password = action.password
			state.isLoggedIn = true	
		})
	}
})
const authReducer = auth.reducer

export default authReducer