import axios from "axios";

import { BASE_URL } from "./Endpoints";
import customToast from "../components/Toast/toastify";
import { GET_STORAGE_ITEM, SET_STORAGE_ITEM } from "./storage";

const MAX_RETRY_COUNT = 3; // Maximum number of retries
let retryCount = 0; // Initialize the retry counter

let store;

export const injectStore = (_store) => {
  store = _store;
};

export const getToken = () => {
  return GET_STORAGE_ITEM("token");
};

export const dApis = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "*/*",
    "content-type": "application/json",
    Authorization: getToken() ? `Bearer ${getToken()}` : "",
  },
  timeout: 30000,
});

export const setAuthorizationHeader = (token) => {
  dApis.defaults.headers.Authorization = `Bearer ${token}`;
};

const storedToken = getToken();
setAuthorizationHeader(storedToken);

const refreshAccessToken = async (refreshToken) => {
  const res = await axios.post(`${BASE_URL}/User/refresh_token`, {
    refreshToken,
  });
  const newToken = res.data.token;
  SET_STORAGE_ITEM("token", res.data.token);
  setAuthorizationHeader(newToken);

  return newToken;
};

dApis.interceptors.request.use(function (config) {
  if (navigator.onLine) {
    return config;
  } else {
    customToast("No internet connection", true);
  }
});

dApis.interceptors.response.use(
  (res) => {
    return res.data;
  },
  async (err) => {
    if (err.response.status === 401) {
      const refreshToken = GET_STORAGE_ITEM("refresh_token");
      try {
        while (retryCount < MAX_RETRY_COUNT) {
          retryCount++;
          const newToken = await refreshAccessToken(refreshToken);
          err.config.headers.Authorization = `Bearer ${newToken}`;
          return dApis(err.config);
        }
        customToast("Maximum retry attempts reached.", true);
        setTimeout(() => {
          window.location.href = "/login";
        }, 1000);
      } catch (refreshError) {
        window.location.href = "/login";
        throw refreshError;
      }
    } else {
      throw err.response.data;
    }
  }
);

export default {
  get: (...args) => dApis.get(...args),
  post: (...args) => dApis.post(...args),
  put: (...args) => dApis.put(...args),
  patch: (...args) => dApis.patch(...args),
  delete: (...args) => dApis.delete(...args),
};
