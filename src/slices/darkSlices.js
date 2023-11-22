import { createSlice } from '@reduxjs/toolkit'

export const darkSlices = createSlice({
  name: 'dark',
  initialState: {
    darkitem: true,
  },
  reducers: {
    darkTrue: (state,action) => {
      state.darkitem = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {darkTrue } = darkSlices.actions

export default darkSlices.reducer