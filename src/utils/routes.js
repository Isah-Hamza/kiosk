import Customers from "../pages/Customers";
import AddCustomer from "../pages/Customers/AddCustomer";
import RecordExpenses from "../pages/Expenses/RecordExpeses";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Orders from "../pages/Orders";
import Products from "../pages/Products";
import CreateProduct from "../pages/Products/CreateProduct";
import ProductDetails from "../pages/Products/ProductDetails";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import CreateBusiness from "../pages/Register/CreateBusiness";
import VerifyAccount from "../pages/Register/VerifyAccount";
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
    title: "Verify OTP",
    path: "/verify-account",
    component: VerifyAccount,
  },
  {
    title: "Create Business",
    path: "/create-business",
    component: CreateBusiness,
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
    title: "Customers",
    path: "/customers",
    component: Customers,
  },
  {
    title: "Add Customer",
    path: "/add-customer",
    component: AddCustomer,
  },
  {
    title: "Orders",
    path: "/orders",
    component: Orders,
  },
];
