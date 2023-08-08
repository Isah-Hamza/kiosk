import { GET_STORAGE_ITEM } from "../config/storage";
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
import RequestOTP from "../pages/RequestOTP";
import ResetPassword from "../pages/ResetPassword";
import NewSales from "../pages/Sales/AddNewSales";
import Staff from "../pages/Staff";
import AddStaff from "../pages/Staff/AddStaff";
import StaffDetails from "../pages/Staff/StaffDetails";

export const routes = [
  {
    title: "Login",
    path: "/",
    component: GET_STORAGE_ITEM("token") ? Home : Login,
  },
  {
    title: "Login",
    path: "/login",
    component: Login,
  },
  {
    title: "RequestOTP",
    path: "/request-otp",
    component: RequestOTP,
  },
  {
    title: "Reset Password",
    path: "/reset-password",
    component: ResetPassword,
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
    title: "Inventory",
    path: "/inventory",
    component: Products,
  },
  {
    title: "Create Inventory",
    path: "/add-inventory",
    component: CreateProduct,
  },
  {
    title: "Product Details",
    path: "/inventory/details",
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
    title: "Staff",
    path: "/sub-accounts",
    component: Staff,
  },

  {
    title: "Staff Details",
    path: "/sub-accounts/details",
    component: StaffDetails,
  },
  {
    title: "Add Staff",
    path: "/add-staff",
    component: AddStaff,
  },
  {
    title: "Orders",
    path: "/orders",
    component: Orders,
  },
];
