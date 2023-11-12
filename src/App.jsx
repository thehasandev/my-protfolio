import React from 'react'

import router from './routes/route'
import store from './store'


import "./App.css"
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  )
}

export default App