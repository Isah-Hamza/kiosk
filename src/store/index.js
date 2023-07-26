import { configureStore } from "@reduxjs/toolkit";
// import TestingSlice from "./slice/TestingSlice";
// import LoginSlice from "./slice/user/loginSlice";

const store = configureStore({
  reducer: {
    // testingSlice: TestingSlice,
    // authenticate: LoginSlice,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware();
  },
});

export default store;
