import { ApiEndPoints } from "../config/Endpoints";
import api from "../config/api";

export async function CreatePartner(payload) {
  const response = await api.post(ApiEndPoints.create_partner, payload);
  return response;
}

export async function GetUserAccounts() {
  const response = await api.get(ApiEndPoints.get_user_accounts);
  return response;
}
