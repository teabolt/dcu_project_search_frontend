import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import StudentsList from 'prosearch-components/StudentsList';

import './Project.scss';

const Project = (props) => {
  const [expanded, setExpanded] = useState(false);

  const onExpandControlClick = () => {
    setExpanded(!expanded);
  };

  const expandControlIcon = expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />;
  return (
    <div className='project-container' key={props.key}>
      <div>{props.project.title}</div>
      <div>{props.project.year}</div>
      <div>{props.project.description}</div>
      {expanded && (
        <>
          <div>{props.project.area}</div>
          <div>{props.project.programme}</div>
          <div>
            <StudentsList students={props.project.students} />
          </div>
          <div>{props.project.supervisor}</div>
          <div>{props.project.technology}</div>
          <div>{props.project.video}</div>
        </>
      )}
      <Button startIcon={expandControlIcon} onClick={onExpandControlClick} />
    </div>
  );
};

Project.propTypes = {
  key: PropTypes.string.isRequired,
  project: PropTypes.object.isRequired, // FIXME
};

export default Project;
