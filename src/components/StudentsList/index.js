import React from 'react';
import PropTypes from 'prop-types';

import Anchor from 'prosearch-components/Anchor';

import './StudentsList.scss';

const StudentsList = (props) => {
  return (
    <div className='students-list-container'>
      {props.students.map((student, index) => {
        return (
          <span
            className='students-list-student'
            key={`students-list-student-${index}`}
          >
            {student.name} (
            <Anchor className='inline-link' href={`mailto:${student.email}`}>
              {student.email}
            </Anchor>
            )
          </span>
        );
      })}
    </div>
  );
};

StudentsList.propTypes = {
  students: PropTypes.arrayOf(
    PropTypes.exact({
      email: PropTypes.string,
      name: PropTypes.string,
    }).isRequired
  ).isRequired,
};

export default StudentsList;
