import { createBrowserRouter } from "react-router-dom";
import MainLayout from "~/layouts/main";
import SignIn from "~/pages/auth/sign-in";
import SignUp from "~/pages/auth/sign-up";
import Home from "~/pages/home";
import NotFound from "~/pages/not-found";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        path: "/auth/sign-up",
        element: <SignUp />,
      },
      {
        path: "/auth/sign-in",
        element: <SignIn />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default routes;
