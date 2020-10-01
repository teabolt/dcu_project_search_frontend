import _ from 'lodash';
import queryString from 'query-string';
import React from 'react';
import { withRouter } from 'react-router';
import updeep from 'updeep';

/**
 *
 * @param {} WrappedComponent Component to pass the query parameter to
 * @param {} paramName Parameter name
 * @param {} setterName Name of callback to set a new parameter value
 * @param {} defaultValue Default value for the parameter
 */
export default function withQueryParam(
  WrappedComponent,
  paramName,
  setterName,
  defaultValue
) {
  const WithQueryParam = (props) => {
    const queryObject = queryString.parse(props.location.search);

    const param = _.get(queryObject, paramName, defaultValue);

    const setParam = (newValue) => {
      let newQueryObject;
      if (newValue) {
        newQueryObject = updeep.updateIn([paramName], newValue, queryObject);
      } else {
        // Remove param if no value is passed
        newQueryObject = updeep.omit([paramName], queryObject);
      }
      props.history.push({
        search: queryString.stringify(newQueryObject),
      });
    };

    return (
      <WrappedComponent
        {...props}
        {...{ [paramName]: param, [setterName]: setParam }}
      />
    );
  };
  return withRouter(WithQueryParam);
}
