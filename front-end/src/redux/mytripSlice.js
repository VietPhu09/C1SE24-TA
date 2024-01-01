import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mytripList: [],
}

export const myTripSlice = createSlice({
    name: "mytrip",
    initialState,
    reducers:{
        setDataMyTrip: (state, action) => {
            state.mytripList = [...action.payload]
            console.log(action.payload)
        }
    }
})

export const {setDataMyTrip} = myTripSlice.actions

export default myTripSlice.reducer