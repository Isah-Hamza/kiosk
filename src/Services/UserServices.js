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

export async function ChangePassword(payload) {
  const response = await api.post(ApiEndPoints.change_password, payload);
  return response;
}

export async function GetOTP(payload) {
  const response = await api.post(ApiEndPoints.get_otp, payload);
  return response;
}

export async function ResetPassword(payload) {
  const response = await api.post(ApiEndPoints.reset_password, payload);
  return response;
}
