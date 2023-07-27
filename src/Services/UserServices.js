import { ApiEndPoints } from "../config/Endpoints";
import api from "../config/api";

export async function AuthenticateUser(payload) {
  const response = await api.post(ApiEndPoints.authenticate, payload);
  return response;
}

export async function Signup(payload) {
  const response = await api.post(ApiEndPoints.signup, payload);
  return response;
}

export async function ConfirmAccount(payload) {
  const response = await api.post(ApiEndPoints.confirm_account, payload);
  return response;
}
