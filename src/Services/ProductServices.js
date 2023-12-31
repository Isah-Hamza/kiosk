import { ApiEndPoints } from '../config/Endpoints';
import api from '../config/api';

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
export async function CreateCustomer(payload) {
  const response = await api.post(ApiEndPoints.create_customer, payload);
  return response;
}
export async function CreateSupplier(payload) {
  const response = await api.post(ApiEndPoints.create_supplier, payload);
  return response;
}
export async function GetCustomers() {
  const response = await api.get(ApiEndPoints.all_customers);
  return response;
}

export async function GetProductById(product_id) {
  const response = await api.get(`${ApiEndPoints.product_by_id}/${product_id}`);
  return response;
}

export async function GetProductActivities(product_id) {
  const response = await api.get(`Product/${product_id}/productactivity`);
  return response;
}

export async function UpdateSellingPrice({ product_id, payload }) {
  const response = await api.patch(`Product/${product_id}/update-sellingprice`, payload);
  return response;
}

export async function UpdateCostPrice({ product_id, payload }) {
  const response = await api.patch(`Product/${product_id}/update-costprice`, payload);
  return response;
}

export async function UpdateStock({ product_id, payload }) {
  const response = await api.patch(`Product/${product_id}/update-stock`, payload);
  return response;
}

export async function DeleteProduct(product_id) {
  const response = await api.delete(`${ApiEndPoints.delete_product}/${product_id}`);
  return response;
}

export async function UpdateProduct({ product_id, payload }) {
  const response = await api.patch('Product/' + product_id, payload);
  return response;
}
