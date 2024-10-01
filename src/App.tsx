// import './App.css'

import { RouterProvider } from "react-router-dom"
import { routers } from "./app/routes/routes"



function App() {

  return (
  <RouterProvider router={routers}></RouterProvider>
  )
}

export default App
