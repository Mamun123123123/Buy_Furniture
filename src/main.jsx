import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Shop from './pages/Shop.jsx';
import WhyChoose from './pages/WhyChoose.jsx';
import Products from './pages/Products.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path:'/',
        element:
        ( <> <Home /> <WhyChoose /> <Products heading ="Best Selling Product"/> </>)
      },
      {
        path:'/about',
        element:<About />
      },
       {
        path:'/shop',
        element:<><Shop /> <Products heading ="What's Your Choice"/></> 
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
   <StrictMode>
   <RouterProvider router={router} />,
   </StrictMode>
)
