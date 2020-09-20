import className from 'classnames';
import _ from 'lodash';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import Anchor from 'prosearch-components/Anchor';
import ListItem from 'prosearch-components/ListItem';
import StudentsList from 'prosearch-components/StudentsList';
import SupervisorRenderer from 'prosearch-components/SupervisorRenderer';

import './Project.scss';

const EXPAND_EVENT_TARGET_CLASSES = ['MuiButtonBase-root', 'MuiSvgIcon-root'];
const EXPAND_EVENT_TARGET_TAGS = ['path'];

const commonIconProps = {
  color: 'inherit',
  fontSize: 'large',
};

const Project = (props) => {
  const [expanded, setExpanded] = useState(false);

  const onClickExpand = (event, newValue) => {
    const targetClass = _.get(event, ['target', 'classList', 0]);
    const targetTag = _.get(event, ['target', 'tagName']);
    if (
      EXPAND_EVENT_TARGET_CLASSES.some((target) => target === targetClass) ||
      EXPAND_EVENT_TARGET_TAGS.some((tag) => tag === targetTag)
    ) {
      // Only change the accordion if the button is clicked.
      setExpanded(newValue);
    }
  };

  const collapseAccordion = () => {
    setExpanded(false);
  };

  return (
    <Accordion
      className='project-container'
      data-testid={props.testId}
      expanded={expanded}
      onChange={onClickExpand}
    >
      <AccordionSummary className='project-summary'>
        <div
          className={className(
            'label-value-pair',
            'project-description before-expanded'
          )}
        >
          <div className='project-header'>
            <div className='project-title'>
              <Typography variant='h5'>{props.project.title}</Typography>
            </div>
            <div className='project-year'>
              <Typography variant='h5'>{props.project.year}</Typography>
            </div>
          </div>
          <ListItem
            className='project-description'
            label='Description'
            value={props.project.description}
          />
        </div>
        {!expanded && (
          <IconButton
            className='project-expand-control project-expand-control-more'
            data-testid='project-expand-button'
          >
            <ExpandMoreIcon {...commonIconProps} />
          </IconButton>
        )}
      </AccordionSummary>
      <AccordionDetails className='project-expanded-container'>
        <ListItem
          className='project-programme'
          label='Programme'
          value={props.project.programme}
        />
        <ListItem
          className='project-supervisor'
          label='Supervisor'
          value={<SupervisorRenderer supervisor={props.project.supervisor} />}
        />
        <ListItem
          className='project-students'
          label='Students'
          value={<StudentsList students={props.project.students} />}
        />
        <ListItem
          className='project-area'
          label='Area'
          value={props.project.area}
        />
        <ListItem
          className='project-technology'
          label='Technology'
          value={props.project.technology}
        />
        {props.project.video && (
          <ListItem
            className='project-video'
            label='Video'
            value={
              <Anchor
                className='inline-link'
                // FIXME: Check that link doesn't have the protocol in it already
                href={`https://${props.project.video}`}
                target='_blank'
              >
                {props.project.video}
              </Anchor>
            }
          />
        )}
        <IconButton
          className='project-expand-control project-expand-control-less'
          data-testid='project-collapse-button'
          onClick={collapseAccordion}
        >
          <ExpandLessIcon {...commonIconProps} />
        </IconButton>
      </AccordionDetails>
    </Accordion>
  );
};

Project.propTypes = {
  project: PropTypes.object.isRequired, // FIXME

  testId: PropTypes.string,
};

export default Project;
