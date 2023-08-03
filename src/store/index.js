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
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware();
  },
});

export default store;
