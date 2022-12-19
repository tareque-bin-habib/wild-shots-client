import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import Signin from './components/Signin/Signin';
import Signup from './components/Signup/Signup';
import Services from './components/Services/Services';
import Checkout from './components/Checkout/Checkout';
import PrivateRoutes from './routes/PrivateRoutes';
import Review from './components/Review/Review';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/signin',
          element: <Signin></Signin>
        },
        {
          path: '/signup',
          element: <Signup></Signup>
        },
        {
          path: '/services',
          element: <Services></Services>
        },
        {
          path: '/checkout/:id',
          element: <PrivateRoutes><Checkout></Checkout></PrivateRoutes>,
          loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path: '/review',
          element: <Review></Review>
        }
      ]
    }
  ])
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
