import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    id: "",
    email: "",
    user: "",
    first_name: "",
    last_name: "",
    avatar: "",
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginRedux: (state, action) => {
            console.log(action.payload.user)
            state.email = action.payload.user.email
            state.user = action.payload.user.username
            state.id = action.payload.user.id
            state.first_name = action.payload.user.first_name
            state.last_name = action.payload.user.last_name
            state.avatar = action.payload.user.avatar
        },
        logoutRedux: (state, action) => {
            state.email=""
            state.user = ""
            state.id = ""
            state.first_name = ""
            state.last_name = ""
            state.avatar = ""
            localStorage.removeItem('accessToken')
        }
    }
})

export const {loginRedux, logoutRedux} = userSlice.actions

export default userSlice.reducer