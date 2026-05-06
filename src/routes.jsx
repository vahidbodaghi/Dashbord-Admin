import { createBrowserRouter } from "react-router";
import Comments from "./pages/Comments/Page";
import Tickets from "./pages/Tickets/Page";
import Users from "./pages/Users/Page";
import Home from "./pages/Home/Page";
import Products from "./pages/Products/Page";
import TicketDetails from "./pages/TicketDetails/Page";
import DashboardLayout from "./components/layout/DashboardLayout";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "comments",
        element: <Comments />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "tickets",
        element: <Tickets />,
      },
      {
        path: "tickets/:ticketID",
        element: <TicketDetails />,
      },
    ],
  },
]);

export default routes;
