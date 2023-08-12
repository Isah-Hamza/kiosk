import { ApiEndPoints } from "../config/Endpoints";
import api from "../config/api";

export async function CreateBook(payload) {
  const response = await api.post(ApiEndPoints.create_book, payload);
  return response;
}

export async function GetBooks(bookType) {
  const response = await api.get(
    `${ApiEndPoints.all_books}?BookType=${bookType}`
  );
  return response;
}
