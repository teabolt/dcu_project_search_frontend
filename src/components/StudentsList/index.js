import React from 'react';
import PropTypes from 'prop-types';

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
            {student.name} ({student.email})
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
