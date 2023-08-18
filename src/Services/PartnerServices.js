import { ApiEndPoints } from "../config/Endpoints";
import api from "../config/api";

export async function CreatePartner(payload) {
  const response = await api.post(ApiEndPoints.create_partner, payload);
  return response;
}

export async function CreateAccount(payload) {
  const response = await api.post(ApiEndPoints.create_account, payload);
  return response;
}

export async function CreateCustomer(payload) {
  const response = await api.post(ApiEndPoints.create_customer, payload);
  return response;
}
export async function CreateSupplier(payload) {
  const response = await api.post(ApiEndPoints.create_supplier, payload);
  return response;
}
export async function GetAccounts(payload) {
  const response = await api.get(ApiEndPoints.all_accounts, payload);
  return response;
}

export async function GetUserAccounts() {
  const response = await api.get(ApiEndPoints.get_user_accounts);
  return response;
}

export async function SwitchAccount(id) {
  const response = await api.post(ApiEndPoints.switch_accounts + "/" + id);
  return response;
}
