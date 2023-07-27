import { ApiEndPoints } from "../config/Endpoints";
import api from "../config/api";

export async function GetAllStates() {
  const response = await api.get(ApiEndPoints.all_states);
  return response;
}

export async function GetPartnerGroups() {
  const response = await api.get(ApiEndPoints.patner_group);
  return response;
}

export async function GetPartnerSubGroups(id) {
  const response = await api.get(ApiEndPoints.patner_subgroup + "/" + id);
  return response;
}
