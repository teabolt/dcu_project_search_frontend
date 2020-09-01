import axios from 'axios';

import { API_ENDPOINT, SEARCH_ENDPOINT } from 'prosearch-constants';

export const BACKEND_HOST = process.env.REACT_APP_BACKEND_HOST;
export const BACKEND_URL = `${BACKEND_HOST}/${API_ENDPOINT}`;

export const SEARCH_URL = `${BACKEND_URL}/${SEARCH_ENDPOINT}`;

export async function searchProjects(query, from, limit) {
  let qs = `q=${query}`;
  if (from) {
    qs += `&from=${from}`;
  }
  if (limit) {
    qs += `&limit=${limit}`;
  }
  const response = await axios.get(`${SEARCH_URL}?${qs}`);
  return response.data;
}
