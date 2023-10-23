import { configureStore } from '@reduxjs/toolkit'
import darkSlices from './slices/darkSlices'

export default configureStore({
  reducer: {
    dark : darkSlices
  },
})