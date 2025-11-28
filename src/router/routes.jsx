import CreateProductPage from "../pages/CreateProductPage";
import EditProductPage from "../pages/EditProductPage";
import HomePage from "../pages/HomePage";
import ProductsTableList from "../pages/ProductsTableList/index.";
import ViewProductPage from "../pages/ViewProductPage";
import { PATHS } from "./paths";
import { Navigate } from "react-router-dom";

const routes = [
  {
    index: true,
    element: <HomePage />,
  },
  {
    path: PATHS.PRODUCT.ROOT,
    element: <ProductsTableList />,
  },
  {
    path: PATHS.PRODUCT.VIEW,
    element: <ViewProductPage />,
  },
  {
    path: PATHS.PRODUCT.EDIT,
    element: <EditProductPage />,
  },
  {
    path: PATHS.PRODUCT.CRAETE,
    element: <CreateProductPage />,
  },
  {
    path: PATHS.ERROR.PAGE_NOT_FOUND,
    element: <h1>Page Not found 404</h1>,
  },
  {
    path: "*",
    element: <Navigate to={PATHS.ERROR.PAGE_NOT_FOUND} replace={true} />,
  },
];

export {routes}