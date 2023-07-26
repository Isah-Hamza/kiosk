import { ApiEndPoints } from "../config/Endpoints";
import api from "../config/api";

export async function AuthenticateUser(payload) {
  const response = await api.post(ApiEndPoints.authenticate, payload);
  return response;
}