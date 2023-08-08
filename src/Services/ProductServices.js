import { ApiEndPoints } from "../config/Endpoints";
import api from "../config/api";

export async function CreateProduct(payload) {
  const response = await api.post(ApiEndPoints.create_product, payload);
  return response;
}

export async function GetInventory() {
  const response = await api.get(ApiEndPoints.all_inventory);
  return response;
}

export async function GetSuppliers() {
  const response = await api.get(ApiEndPoints.all_suppliers);
  return response;
}
