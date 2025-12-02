import { path } from "framer-motion/client";
import UserGuard from "../components/Guards/UserGuard";
import CreateProductPage from "../pages/CreateProductPage";
import EditProductPage from "../pages/EditProductPage";
import HomePage from "../pages/HomePage";
import ProductsTableList from "../pages/ProductsTableList/index.";
import ViewProductPage from "../pages/ViewProductPage";
import { PATHS } from "./paths";
import { Navigate } from "react-router-dom";
import AdminGuard from "../components/Guards/AdminGuard";
import GuestGuard from "../components/Guards/GuestGuard";
import Login from "../components/Login";
import Signup from "../components/Signup";
import AboutPage from "../pages/AboutPage";

const userRoutes = [
  {
    path: PATHS.PRODUCT.ROOT,
    element: <UserGuard />,
    children: [
      {
        index: true,
        element: <ProductsTableList />,
      },
      {
        path: PATHS.PRODUCT.VIEW,
        element: <ViewProductPage />,
      },
      {
        path: PATHS.PRODUCT.CRAETE,
        element: <CreateProductPage />,
      },
      {
        path: PATHS.PRODUCT.EDIT,
        element: <EditProductPage />,
      },
    ],
  },
];

const adminRoutes = [
  {
    path: PATHS.ADMIN.ROOT,
    element: <AdminGuard />,
    children: [
      {
        index: true,
        element: <h1>Admin Root</h1>,
      },
      {
        path: PATHS.ADMIN.USERS,
        element: <h1>Admin Users</h1>,
      },
    ],
  },
];

const authRoutes = [
  {
    path: PATHS.LOIGN,
    element: (
      <GuestGuard>
        <Login />
      </GuestGuard>
    ),
  },
  {
    path: PATHS.SIGNUP,
    element: (
      <GuestGuard>
        <Signup />
      </GuestGuard>
    ),
  },
];

const guestRoutes = [
  {
    index: true,
    element: (
      <GuestGuard>
        <HomePage />
      </GuestGuard>
    ),
  },
  {
    path: PATHS.ABOUT,
    element: (
      <GuestGuard>
        <AboutPage />
      </GuestGuard>
    ),
  },
  ...authRoutes,
];

const routes = [
  ...userRoutes,
  ...adminRoutes,
  ...guestRoutes,
  {
    path: PATHS.ERROR.PAGE_NOT_FOUND,
    element: <h1>Page Not found 404</h1>,
  },
  {
    path: "*",
    element: <Navigate to={PATHS.ERROR.PAGE_NOT_FOUND} replace={true} />,
  },
];

export { routes };
