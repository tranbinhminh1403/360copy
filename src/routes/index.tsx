import { createBrowserRouter } from "react-router-dom";
import { Homepage } from "../pages/homepage";
import Order from "../pages/order";
import PaymentResult from "../pages/result";
import AdminLogin from "../pages/admin/login";
import OrdersPage from "../pages/admin/orders";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
  },
  {
    path: '/order/:id',
    element: <Order />,
  },
  {
    path: '/result',
    element: <PaymentResult />,
  },
  {
    path: '/admin/login',
    element: <AdminLogin />,
  },
  {
    path: '/admin/orders',
    element: <OrdersPage />,
  }
]);
