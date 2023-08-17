import { ApiEndPoints } from "../config/Endpoints";
import api from "../config/api";

export async function GetDashboardReport() {
  const response = await api.get(ApiEndPoints.dashboard_report);
  return response;
}

export async function GetAccountBalance() {
  const response = await api.get(ApiEndPoints.account_balance);
  return response;
}
