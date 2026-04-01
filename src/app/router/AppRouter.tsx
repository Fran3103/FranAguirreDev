import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "@/app/layouts/MainLayout";
import { HomePage } from "@/pages/HomaPage";
import { TemplatesPage } from "@/pages/TemplatePage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { PrivacyPage } from "@/pages/PrivacyPage";
import { ResourcesPage } from "@/pages/ResourcesPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "plantillas",
        element: <TemplatesPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
      {
        path: "recursos",
        element: <ResourcesPage />,
      },
      {
        path: "privacidad",
        element: <PrivacyPage />,
      },
    ],
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}