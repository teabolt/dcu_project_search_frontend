import _ from 'lodash';

const PROJECT_ID_SEPARATOR = '-';

/**
 * Generate an URL for the given project.
 * The URL is based on the project id (for processing on our side)
 * and based on the project title (for user readability).
 */
export function getProjectLink(project) {
  const origin = _.get(location, ['origin']);
  if (!origin) {
    // eslint-disable-next-line no-console
    console.error('Native location origin API is not available');
  }
  const appUri = 'projects';
  const projectUri = [project.id, project.title].join(PROJECT_ID_SEPARATOR);
  return encodeURI(`${origin}/${appUri}/${projectUri}`);
}

/**
 * Get the project ID from the given project URI.
 */
export function getIdFromProjectUri(projectUri) {
  const idx = projectUri.indexOf(PROJECT_ID_SEPARATOR);
  if (idx === -1) {
    return '';
  }
  return projectUri.substr(0, idx);
}
