import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import PolicyPage from "./pages/PolicyPage";
import VacancyPage from "./pages/VacancyPage";
import ErrorPage from "./pages/ErrorPage";

export const router = createBrowserRouter([
  {
    element: <MainLayout />, 
    errorElement: <ErrorPage />, 
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/policy", element: <PolicyPage /> },
      { path: "/vacancy", element: <VacancyPage /> },
    ],
  },
]);
