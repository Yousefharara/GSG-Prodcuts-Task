import CreateProduct from "../pages/CreateProduct";
import HomePage from "../pages/HomePage";
import ProductsTableList from "../pages/ProductsTableList/index.";
import ViewProduct from "../pages/ViewProduct";
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
    element: <ViewProduct />,
  },
  {
    path: PATHS.PRODUCT.EDIT,
    element: <CreateProduct />,
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