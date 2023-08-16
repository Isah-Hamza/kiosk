import { ApiEndPoints } from "../config/Endpoints";
import api from "../config/api";

const today = new Date();
let tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);
tomorrow = new Date(tomorrow).toISOString();

export async function CreateBook(payload) {
  const response = await api.post(ApiEndPoints.create_book, payload);
  return response;
}

export async function GetBooks(bookType) {
  const response = await api.get(
    `${ApiEndPoints.all_books}?BookType=${bookType}&ToDate=${tomorrow}`
  );
  return response;
}

export async function GetBookById(id) {
  const response = await api.get(`${ApiEndPoints.book_by_id}/${id}`);
  return response;
}
