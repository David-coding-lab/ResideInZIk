import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { Provider } from './components/ui/provider'

// Up-to-date Routing
const Route = createBrowserRouter([
  {
    // a particular page containing most pages
    path: '/',
    element: <App />,
    // pages inside it
    children: [

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
