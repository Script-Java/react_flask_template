import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HomePage } from './pages/home';
import './index.css'
import 'preline';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage/>,
    errorElement: <NotFoundPage/>
  },
  {
    path: '/about',
    element: <AboutPage/>
  },
  {
    path: '/contact',
    element: <GalleryPage/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
