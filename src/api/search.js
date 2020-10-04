import axios from 'axios';

import { BACKEND_URL, SEARCH_ENDPOINT } from 'prosearch-constants';

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
