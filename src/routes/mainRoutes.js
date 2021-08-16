import { lazy } from "react";

export const mainRoutes = [
  {
    path: "/",
    name: "Home",
    exact: true,
    component: lazy(
      () =>
        import("../pages/HomePage/HomePage") /* webpackChunkName: "HomePage" */
    ),
    isPrivate: false,
    isRestricted: false,
  },
  {
    path: "/contacts",
    name: "Contacts",
    exact: false,
    component: lazy(
      () =>
        import(
          "../pages/Contact/Contacts"
        ) /* webpackChunkName: "Contacts" */
    ),
    isPrivate: true,
    isRestricted: false,
  },
  {
    path: "/register",
    name: "Sign Up",
    exact: false,
    component: lazy(
      () =>
        import("../pages/Signup/Signup") /* webpackChunkName: "Sign Up" */
    ),
    isPrivate: false,
    isRestricted: true,
  },
  {
    path: "/login",
    name: "Login",
    exact: false,
    component: lazy(
      () => import("../pages/Login/Login") /* webpackChunkName: "Login" */
    ),
    isPrivate: false,
    isRestricted: true,
  },
];