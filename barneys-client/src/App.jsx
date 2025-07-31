import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './ui/AppLayout';
import Error from './ui/Error';
import Cart from './features/cart/Cart';
import Loading from './ui/Loading';
import AboutUs from './ui/AboutUs';
import OrderPage from './features/order/OrderPage';
import HomePage, { loader as menuHome } from './ui/HomePage';
import Menu, { loader as menuLoader } from '../src/features/menu/Menu';
import Order, { loader as orderLoader } from './features/order/Order';
import CreateOrder, {
  action as actionCreateOrder,
} from './features/order/CreateOrder';
import { action as updateOrderAction } from './features/order/UpdateOrder';
import Footer from './ui/Footer';

const router = createBrowserRouter(
  [
    {
      element: <AppLayout />,
      errorElement: <Error />,
      hydrateFallbackElement: <Loading />,
      children: [
        {
          path: '/',
          element: <HomePage />,
          loader: menuHome,
          errorElement: <Error />,
        },
        {
          path: '/menu',
          element: <Menu />,
          loader: menuLoader,
          errorElement: <Error />,
        },
        {
          path: '/about',
          loader: menuHome,
          errorElement: <Error />,
          element: <HomePage />,
        },
        {
          path: '/orderPage',
          element: <OrderPage />,
        },
        {
          path: '/cart',
          element: <Cart />,
        },
        {
          path: '/contact',
          loader: menuHome,
          errorElement: <Error />,
          element: <HomePage />,
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
          action: updateOrderAction,
        },
      ],
    },
  ],
  {
    hydrateFallbackElement: <Loading />,
  },
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
