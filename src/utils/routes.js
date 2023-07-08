import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

  export const routes = [
    {
      title: "Login",
      path: "/login",
      component: Login,
    },
    {
      title: "Login",
      path: "/",
      component: Login,
    },
    {
      title: "Register",
      path: "/register",
      component: Register,
    },
    {
      title: "Home",
      path: "/home",
      component: Home,
    },
  ];