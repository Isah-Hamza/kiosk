import { ApiEndPoints } from "../config/Endpoints";
import api from "../config/api";

export async function CreatePartner(payload) {
  const response = await api.post(ApiEndPoints.create_partner, payload);
  return response;
}
