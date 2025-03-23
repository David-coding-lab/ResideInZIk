import { createBrowserRouter, RouterProvider } from 'react-router'
import {lazy, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from './components/ui/provider'

import App from './App.jsx'

import './index.css'
import './App.css'

const Home = lazy(()=> import('./Pages/Home'))
const SearchResult = lazy(()=> import('./Pages/SearchResult'))
const LodgesDisplay = lazy(()=> import('./components/LodgesDisplay'))

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
            path: '/lodgesDisplay',
            element: <LodgesDisplay />
          },
          {
            path: '/searchResult',
            element: <SearchResult />
          }
        ]
      },
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
