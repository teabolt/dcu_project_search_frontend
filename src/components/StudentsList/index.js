import React from 'react';

import Anchor from 'prosearch-components/Anchor';
import * as ProsearchPropTypes from 'prosearch-proptypes';

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
            {student.name}
            {student.email && (
              <>
                {' ('}
                <Anchor
                  className='inline-link'
                  href={`mailto:${student.email}`}
                >
                  {student.email}
                </Anchor>
                {')'}
              </>
            )}
          </span>
        );
      })}
    </div>
  );
};

StudentsList.propTypes = {
  students: ProsearchPropTypes.ProjectStudents.isRequired,
};

export default StudentsList;
