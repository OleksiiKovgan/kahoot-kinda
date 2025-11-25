import { createBrowserRouter, RouterProvider } from "react-router";
import App from "../App";
import { PATHS } from "./paths.const";
import { MainLayoutPage, Round, RoundPreparation, WelcomePage } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <MainLayoutPage />,
        children: [
          { path: PATHS.WELCOME_PAGE.template, element: <WelcomePage /> },
          {
            path: PATHS.ROUND_PREPARATION.template,
            element: <RoundPreparation />,
          },
          { path: PATHS.ROUND.template, element: <Round /> },
        ],
      },
    ],
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
