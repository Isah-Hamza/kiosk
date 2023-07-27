import { configureStore } from "@reduxjs/toolkit";
// import TestingSlice from "./slice/TestingSlice";
import loginSlice from "./slices/user/loginSlice";
import signupSlice from "./slices/user/signupSlice";

const store = configureStore({
  reducer: {
    // testingSlice: TestingSlice,
    authenticate: loginSlice,
    signup: signupSlice,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware();
  },
});

export default store;
