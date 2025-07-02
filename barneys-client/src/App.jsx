import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './ui/AppLayout';
import Error from './ui/Error';
import HomePage from './ui/HomePage';
import Menu, { loader as menuLoader } from '../src/features/menu/Menu';
import AboutUs from './ui/AboutUs';
import OrderPage from './features/order/OrderPage';
import Order, { loader as orderLoader } from './features/order/Order';
import CreateOrder, {
  action as actionCreateOrder,
} from './features/order/CreateOrder';
import Cart from './features/cart/Cart';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,

    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/menu',
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
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
        action: actionCreateOrder,
      },
      {
        path: '/order/:orderId',
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
