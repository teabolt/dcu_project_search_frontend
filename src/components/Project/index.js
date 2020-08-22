import React, { useState } from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import FallbackPlaceholder from 'prosearch-components/FallbackPlaceholder';
import LabelValuePairs from 'prosearch-components/LabelValuePairs';
import StudentsList from 'prosearch-components/StudentsList';

import './Project.scss';

const Project = (props) => {
  const [expanded, setExpanded] = useState(false);

  const onExpandControlClick = () => {
    setExpanded(!expanded);
  };

  const ExpandControlIcon = expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />;

  const items = [
    {
      label: 'Description',
      pairClassName: 'project-description before-expanded',
      value: <FallbackPlaceholder node={props.project.description} />,
    },
    ...(expanded
      ? [
          {
            label: 'Programme',
            pairClassName: 'project-programme',
            value: <FallbackPlaceholder node={props.project.programme} />,
          },
          {
            label: 'Supervisor',
            pairClassName: 'project-supervisor',
            value: <FallbackPlaceholder node={props.project.supervisor} />,
          },
          {
            label: 'Students',
            pairClassName: 'project-students',
            value: (
              <FallbackPlaceholder
                node={<StudentsList students={props.project.students} />}
              />
            ),
          },
          {
            label: 'Area',
            pairClassName: 'project-area',
            value: <FallbackPlaceholder node={props.project.area} />,
          },
          {
            label: 'Technology',
            pairClassName: 'project-technology',
            value: <FallbackPlaceholder node={props.project.technology} />,
          },
          ...(props.project.video
            ? [
                {
                  label: 'Video',
                  pairClassName: 'project-video',
                  value: <FallbackPlaceholder node={props.project.video} />,
                },
              ]
            : []),
        ]
      : []),
  ];

  return (
    <div className='project-container' key={props.key}>
      <div className='project-header'>
        <div className='project-title'>{props.project.title}</div>
        <div className='project-year'>{props.project.year}</div>
      </div>
      <LabelValuePairs className='project-properties' pairs={items} />
      <IconButton
        className='project-expand-control'
        color='inherit'
        onClick={onExpandControlClick}
      >
        {ExpandControlIcon}
      </IconButton>
    </div>
  );
};

Project.propTypes = {
  key: PropTypes.string.isRequired,
  project: PropTypes.object.isRequired, // FIXME
};

export default Project;
