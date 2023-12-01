import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    name: "",
    days: "",
    user: "",
    items: [
        {
            day: "",
            locations: [
                {
                    id: "",
                    name:"",
                    address: "",
                    url: "" ,
                    day: "",
                    latitude: "",
                    longitude: "",
                    category: ""
                },
            ],
        }
    ],
    day: "",
    active: false,
    isDuplicate: false,
    index: "",
    markerList: [],
}

export const tripSlice = createSlice({
    name: "trip",
    initialState,
    reducers:{
        setTripData: (state, action) => {
            state.name = action.payload.name
            state.days = action.payload.days
            state.user = action.payload.user
            state.items = [...action.payload.items]
            state.markerList = []
            console.log(action.payload)
        },
        setDay: (state,action) => {
            state.day = action.payload
            console.log(state.day)
        },
        setLocationItem: (state, action) => {
            const location = action.payload
            const day = location.day
            const findDay = state.items.find((item) => item.day === day);
            
            // findDay && findDay.locations.push(location)
            if(findDay) {
              if(findDay.locations.find((item) => item.id == location.id)){
                state.isDuplicate = true
                console.log('Trung r', state.isDuplicate)
              }
              else {
                  state.isDuplicate = false
                  console.log('Khong trung', state.isDuplicate)
                  findDay.locations.push(location)
                  console.log(location)
                }

            }
            // return { ...state };
          },
          deleteLocationItem: (state, action) => {
            const location = action.payload;
            const id = location.id;
            const day = location.day;
            console.log(action.payload)
          
            return {
              ...state,
              items: state.items.map((item) => {
                if (item.day === day) {
                  const updatedLocations = item.locations.filter((loc) => loc.id !== id);
                  console.log(updatedLocations)
                  return {
                    ...item,
                    locations: updatedLocations,
                  };
                } else {
                  return item;
                }
              }),
            };
          },
          updatedLocationOrder: (state, action) => {
            const updatedLocations = action.payload
            const day = updatedLocations[0].day
            console.log(day)
            
            return {
              ...state,
              items: state.items.map((item) => {
                if(item.day === day) {
                  return {
                    ...item,
                    locations: updatedLocations
                  }
                }
                else {return item}
              })
            }

          },
          activeButton: (state, action) => {
            state.active = action.payload
          },
          setIndex: (state, action) => {
            state.index = action.payload
            console.log(action.payload)
          },
          getLocationArray: (state, action) => {
            const day = action.payload
            const findDay = state.items.find((item) => item.day === day)
            if (findDay)
            {
              console.log(1)
              state.markerList = [...findDay.locations]
            }
          }
          
          
    }
})

export const {setTripData, setLocationItem, setDay, deleteLocationItem, updatedLocationOrder, activeButton, setIndex, getLocationArray} = tripSlice.actions

export default tripSlice.reducer

