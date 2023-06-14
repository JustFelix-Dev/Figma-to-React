import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { RouterProvider, createBrowserRouter, createRoutesFromElements ,Route} from 'react-router-dom'
import Main from './pages/Main'
import AllProducts from './pages/AllProducts'
import ProductPage from './pages/ProductPage'

const router = createBrowserRouter(
         createRoutesFromElements(
          <Route path={'/'} element={<Main/>}>
          <Route index element={<AllProducts/>}/>
          <Route path='/product' element={<ProductPage/>}/>
          </Route>
         )
)

function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
