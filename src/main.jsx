import { createBrowserRouter, RouterProvider } from 'react-router'
import {lazy, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from './components/ui/provider'

import App from './App.jsx'

import './index.css'
import './App.css'

const Home = lazy(()=> import('./Pages/Home'))
const SearchResult = lazy(()=> import('./Pages/SearchResult'))
const LodgesDisplay = lazy(()=> import('./Pages/LodgesDisplay'))
const LodgeVideoPlayer = lazy(()=> import('./Pages/LodgeVideoPlayer'))

// Up-to-date Routing
const Route = createBrowserRouter([
  {
    // a particular page containing most pages
    path: '/',
    element: <App />,
    // pages inside it
    children: [
      {
        path: '',
        element: <Home />,
        children:[
          {
            index: true,
            element: <LodgesDisplay />
          },
          {
            path: 'searchResult',
            element: <SearchResult />
          }
        ]
      },

      {
        path: '/lodgeVideoPlayer',
        element: <LodgeVideoPlayer />
      }
    ],
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>

      <RouterProvider router={Route} />

    </Provider>
  </StrictMode>,
)
