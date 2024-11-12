import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './components/Home/home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/contact.jsx'

/*const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path:"about",
        element: <About />
      },
      {
        path:"contactus",
        element: <Contact />
      }
    ]
  }
])*/


const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />}/>
      <Route path='about' element={<About />}/>
      <Route path='contactus' element={<Contact/>}/>
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
