import sendRequest from "./send-request";
const BASE_URL = '/api/products';

export async function getAll() {
  return sendRequest(BASE_URL);
}

export async function getProduct(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}
