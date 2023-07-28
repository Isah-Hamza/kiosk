import { configureStore } from "@reduxjs/toolkit";
// import TestingSlice from "./slice/TestingSlice";
import loginSlice from "./slices/user/loginSlice";
import signupSlice from "./slices/user/signupSlice";
import confirmAccountSlice from "./slices/user/confirmAccountSlice";
import allStateSlice from "./slices/appData/allStateSlice";
import partnerGroupSlice from "./slices/appData/partnerGroupSlice";
import partnerSubGroupSlice from "./slices/appData/partnerSubGroupSlice";

const store = configureStore({
  reducer: {
    // testingSlice: TestingSlice,
    authenticate: loginSlice,
    signup: signupSlice,
    confirm_account: confirmAccountSlice,
    all_states: allStateSlice,
    partner_group: partnerGroupSlice,
    partner_subgroup: partnerSubGroupSlice,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware();
  },
});

export default store;
