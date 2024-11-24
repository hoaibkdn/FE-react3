import { createSlice } from "@reduxjs/toolkit"

export const LOGIN = 'LOGIN'

const auth = createSlice({
	name: 'auth',
	initialState: {
		username: 'hello',
		password: ''
	},
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(LOGIN, (state, action: any) => {
			state.username = action.username
			state.password = action.password
		})
	}
})
const authReducer = auth.reducer

export default authReducer