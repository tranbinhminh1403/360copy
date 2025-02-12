import Order from "../pages/order";
import { createBrowserRouter } from "react-router-dom";
import { Homepage } from "../pages/homepage";
import PaymentResult from "../pages/result";


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
  }

]);
