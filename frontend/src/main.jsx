import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

//React Router 
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//Page imports
import Home from './pages/Home';

//Router
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { //Error Page not found
        path: "*",
        element: <div>Error, Page not found</div>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);