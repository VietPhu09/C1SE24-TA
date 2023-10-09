import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    email: "",
    user: "",
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginRedux: (state, action) => {
            console.log(action.payload.user)
            state.email = action.payload.user.email
            state.user = action.payload.user.username
        },
        logoutRedux: (state, action) => {
            state.email=""
            state.user = ""
        }
    }
})

export const {loginRedux, logoutRedux} = userSlice.actions

export default userSlice.reducer