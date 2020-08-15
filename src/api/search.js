import axios from 'axios';

import { API_ENDPOINT, SEARCH_ENDPOINT } from 'prosearch-constants/api';

const BACKEND_HOST = process.env.REACT_APP_BACKEND_HOST;
const BACKEND_URL = `${BACKEND_HOST}/${API_ENDPOINT}`;

export async function searchProjects(query) {
  try {
    const response = await axios.get(
      `${BACKEND_URL}/${SEARCH_ENDPOINT}?query=${query}`
    );
    return response.data;
  } catch (err) {
    // error handling middleware
    console.error(err);
    return {};
  }
}
