import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AuthenticateUser } from "../../../Services/UserServices";
import {
  GET_STORAGE_ITEM,
  REMOVE_STORAGE_ITEM,
  SET_STORAGE_ITEM,
} from "../../../config/storage";
import customToast from "../../../components/Toast/toastify";
import { dApis } from "../../../config/api";

const initialState = {
  loading: false,
  error: null,
  token: GET_STORAGE_ITEM("token") || null,
};

const loginSlice = createSlice({
  name: "loginSlice",
  initialState,

  reducers: {
    logout: (state, action) => {
      REMOVE_STORAGE_ITEM("token");
      REMOVE_STORAGE_ITEM("refresh_token");
      REMOVE_STORAGE_ITEM("user");
      REMOVE_STORAGE_ITEM("phone");
      REMOVE_STORAGE_ITEM("account");
      window.location.href = "/login";
    },
  },

  extraReducers: (builder) => {
    builder.addCase(loginAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loginAction.fulfilled, (state, action) => {
      state.token = action.payload.token;
      state.loading = false;
    });
    builder.addCase(loginAction.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});

export const loginAction = createAsyncThunk(
  "loginAction",
  async ({ data, navigate, setPartner }, thunkApi) => {
    // thunkApi.dispatch(changeProgress(60));
    return AuthenticateUser(data)
      .then((res) => {
        SET_STORAGE_ITEM("refresh_token", res.refreshToken);
        SET_STORAGE_ITEM("token", res.token);
        SET_STORAGE_ITEM("user", res.user);
        if (!res.user.isPhoneConfirmed) {
          customToast("Verify your account to continue");
          navigate("/verify-account");
        } else if (res.account == null) {
          customToast("You need to first create a business account");
          navigate("/create-business");
        } else {
          customToast("Login successful");
          SET_STORAGE_ITEM("account", res.account);
          setPartner("account", res.account);
          navigate("/home");
        }
        dApis.defaults.headers.Authorization = `Bearer ${res.token}`;
        return res;
      })
      .catch((e) => {
        customToast(e?.message, true);
        return thunkApi.rejectWithValue(e);
      });
  }
);

export default loginSlice.reducer;

export const { logout } = loginSlice.actions;
