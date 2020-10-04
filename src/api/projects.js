import axios from 'axios';

import { BACKEND_URL, PROJECTS_ENDPOINT } from 'prosearch-constants';

export const PROJECTS_URL = `${BACKEND_URL}/${PROJECTS_ENDPOINT}`;

export async function getProject(id) {
  const qs = `id=${id}`;
  const response = await axios.get(`${PROJECTS_URL}?${qs}`);
  return response.data;
}
