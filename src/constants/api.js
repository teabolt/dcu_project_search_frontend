export const API_ENDPOINT = 'api/v1';

export const BACKEND_HOST =
  process.env.REACT_APP_BACKEND_HOST || 'http://localhost:3001';

export const BACKEND_URL = `${BACKEND_HOST}/${API_ENDPOINT}`;

// Search
export const SEARCH_ENDPOINT = 'search';
export const SEARCH_DEFAULT_PAGINATION_SIZE = 10;

// Projects
export const PROJECTS_ENDPOINT = 'projects';
