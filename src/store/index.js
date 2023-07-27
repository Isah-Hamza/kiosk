import { configureStore } from "@reduxjs/toolkit";
// import TestingSlice from "./slice/TestingSlice";
import loginSlice from "./slices/user/loginSlice";

const store = configureStore({
  reducer: {
    // testingSlice: TestingSlice,
    authenticate: loginSlice,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware();
  },
});

export default store;
