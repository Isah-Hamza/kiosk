import { ApiEndPoints } from '../config/Endpoints';
import api from '../config/api';

export async function CreateDeliveryService(payload) {
  const response = await api.post(ApiEndPoints.create_delivery, payload);
  return response;
}
