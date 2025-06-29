import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../src/ui/Home';
import Menu, { loader as menuLoader } from '../src/features/menu/Menu';
import AboutUs from './ui/AboutUs';
import OrderPage from './features/order/OrderPage';
import Order from './features/order/Order';
import CreateOrder from './features/order/CreateOrder';
import Cart from './features/cart/Cart';
import AppLayout from './ui/AppLayout';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/menu',
        element: <Menu />,
        loader: menuLoader,
      },
      {
        path: '/about',
        element: <AboutUs />,
      },
      {
        path: '/orderpage',
        element: <OrderPage />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/order/new',
        element: <CreateOrder />,
      },
      {
        path: '/order/:orderId',
        element: <Order />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
