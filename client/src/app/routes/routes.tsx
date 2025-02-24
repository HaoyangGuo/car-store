import { AboutPage } from "@/features/about/about-page";
import { CatalogPage } from "@/features/catalog/catalog-page";
import { ProductDetailsPage } from "@/features/catalog/product-details-page";
import { ContactPage } from "@/features/contact/contact-page";
import { HomePage } from "@/features/home/home-page";
import App from "@/layout/App";
import * as reactRouterDom from "react-router-dom";

const router = reactRouterDom.createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "/catalog", element: <CatalogPage /> },
      { path: "/product-details/:id", element: <ProductDetailsPage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/contact", element: <ContactPage /> },
    ]
  }
]);

export { router }