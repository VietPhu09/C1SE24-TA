import { configureStore } from "@reduxjs/toolkit"
import userSliceReducer from './userSlice'
import locationReducer from './locationSlice'
import tripReducer from './tripSlice'

export const store = configureStore({
    reducer: {
        user: userSliceReducer,
        location: locationReducer,
        tripCreate: tripReducer
    },
})