import AddCustomer from "../pages/Customers/AddCustomer";
import RecordExpenses from "../pages/Expenses/RecordExpeses";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Products from "../pages/Products";
import CreateProduct from "../pages/Products/CreateProduct";
import ProductDetails from "../pages/Products/ProductDetails";
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
    path: "/profile",
    component: Profile,
  },
  {
    title: "Products",
    path: "/products",
    component: Products,
  },
  {
    title: "Create Products",
    path: "/add-product",
    component: CreateProduct,
  },
  {
    title: "Product Details",
    path: "/product/details",
    component: ProductDetails,
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
