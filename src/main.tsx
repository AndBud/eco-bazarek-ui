import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./Root.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  HomePage,
  AboutUsPage,
  ContactPage,
  ProductsPage,
  TermsOfUsePage,
} from "./pages";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage.tsx";
import { ProfilePage } from "./pages/ProfilePage.tsx";
import { NotFoundPage } from "./pages/NotFoundPage.tsx";
import { RegistrationPage } from "./pages/RegistrationPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about-us",
        element: <AboutUsPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/products",
        element: <ProductsPage />,
      },
      {
        path: "/terms-of-use",
        element: <TermsOfUsePage />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicyPage />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
      {
        path: "/registration",
        element: <RegistrationPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
