import AddCustomer from "../pages/Customers/AddCustomer";
import RecordExpenses from "../pages/Expenses/RecordExpeses";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import NewSales from "../pages/Sales/AddNewSales";

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
  {
    title: "Profile",
    path: "/prfile",
    component: Profile,
  },
  {
    title: "Record Sales",
    path: "/record-sale",
    component: NewSales,
  },
  {
    title: "Record Expenses",
    path: "/record-expense",
    component: RecordExpenses,
  },
  {
    title: "Add Customer",
    path: "/add-customer",
    component: AddCustomer,
  },
];
