import { ApiEndPoints } from "../config/Endpoints";
import api from "../config/api";

export async function CreateProduct(payload) {
  const response = await api.post(ApiEndPoints.create_product, payload);
  return response;
}
