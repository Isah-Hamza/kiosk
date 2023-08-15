import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./slices/user/loginSlice";
import signupSlice from "./slices/user/signupSlice";
import confirmAccountSlice from "./slices/user/confirmAccountSlice";
import allStateSlice from "./slices/appData/allStateSlice";
import partnerGroupSlice from "./slices/appData/partnerGroupSlice";
import partnerSubGroupSlice from "./slices/appData/partnerSubGroupSlice";
import createPartnerSlice from "./slices/partner/createPartnerSlice";
import getUserAccountSlice from "./slices/partner/getUserAccountSlice";
import switchAccountSlice from "./slices/partner/switchAccountSlice";
import changePasswordSlice from "./slices/user/changePasswordSlice";
import getOTPSlice from "./slices/user/getOTPSlice";
import resetPasswordSlice from "./slices/user/resetPasswordSlice";
import createAccountSlice from "./slices/partner/createAccountSlice";
import getAllAccountSlice from "./slices/partner/getAllAccountSlice";
import createProductSlice from "./slices/product/createProductSlice";
import getInventorySlice from "./slices/product/getInventorySlice";
import getSupplierSlice from "./slices/product/getSupplierSlice";
import updateSellingPriceSlice from "./slices/product/updateSellingPriceSlice";
import updateCostPriceSlice from "./slices/product/updateCostPriceSlice";
import getProductSlice from "./slices/product/getProductSlice";
import deleteProductSlice from "./slices/product/deleteProductSlice";
import updateStockSlice from "./slices/product/updateStockSlice";
import getProductActivitySlice from "./slices/product/getProductActivitySlice";
import updateProductSlice from "./slices/product/updateProductSlice";
import getCustomerSlice from "./slices/product/getCustomerSlice";
import createBookSlice from "./slices/book-keeping/createBookSlice";
import getAllBookSlice from "./slices/book-keeping/getAllBookSlice";
import createCustomerSlice from "./slices/partner/createCustomerSlice";
import createSupplierSlice from "./slices/partner/createSupplierSlice";

const store = configureStore({
  reducer: {
    authenticate: loginSlice,
    signup: signupSlice,
    confirm_account: confirmAccountSlice,
    all_states: allStateSlice,
    partner_group: partnerGroupSlice,
    partner_subgroup: partnerSubGroupSlice,
    create_partner: createPartnerSlice,
    get_user_accounts: getUserAccountSlice,
    switch_account: switchAccountSlice,
    change_password: changePasswordSlice,
    get_otp: getOTPSlice,
    reset_password: resetPasswordSlice,
    create_account: createAccountSlice,
    get_all_accounts: getAllAccountSlice,
    create_product: createProductSlice,
    get_inventory: getInventorySlice,
    get_supplier: getSupplierSlice,
    get_customer: getCustomerSlice,
    update_selling_price: updateSellingPriceSlice,
    update_cost_price: updateCostPriceSlice,
    get_product: getProductSlice,
    delete_product: deleteProductSlice,
    update_stock: updateStockSlice,
    get_product_activities: getProductActivitySlice,
    update_product: updateProductSlice,
    create_book: createBookSlice,
    get_all_books: getAllBookSlice,
    create_customer: createCustomerSlice,
    create_supplier: createSupplierSlice,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware();
  },
});

export default store;
