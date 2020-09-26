import _ from 'lodash';

export function isValidQuery(query) {
  return query && query.trim();
}

export function validateResults(results) {
  return results && _.has(results, ['total']) && _.has(results, ['results']);
}
