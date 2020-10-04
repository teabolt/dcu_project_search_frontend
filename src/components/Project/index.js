import className from 'classnames';
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
import * as ProsearchPropTypes from 'prosearch-proptypes';

import Link from './Link';

import './Project.scss';

const commonIconProps = {
  color: 'inherit',
  fontSize: 'large',
};

const Project = (props) => {
  const [expanded, setExpanded] = useState(false);

  const onExpand = () => {
    setExpanded(true);
  };

  const onCollapse = () => {
    setExpanded(false);
  };

  const commonPropertyNodes = [
    <ListItem
      className='project-programme'
      label='Programme'
      value={props.project.programme}
    />,
    <ListItem
      className='project-supervisor'
      label='Supervisor'
      value={<SupervisorRenderer supervisor={props.project.supervisor} />}
    />,
    <ListItem
      className='project-students'
      label='Students'
      value={<StudentsList students={props.project.students} />}
    />,
    <ListItem
      className='project-area'
      label='Area'
      value={props.project.area}
    />,
    <ListItem
      className='project-technology'
      label='Technology'
      value={props.project.technology}
    />,
  ];
  if (props.project.platform) {
    commonPropertyNodes.push(
      <ListItem
        className='project-platform'
        label='Platform'
        value={props.project.platform}
      />
    );
  }
  if (props.project.video) {
    commonPropertyNodes.push(
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
    );
  }

  if (props.enableAccordions) {
    return (
      <Accordion
        className='project-container'
        data-testid={props.testId}
        expanded={expanded}
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
            <div className='project-controls'>
              <Link iconProps={commonIconProps} project={props.project} />
              <IconButton
                className='project-control project-expand-control-more'
                data-testid='project-expand-button'
                edge='end'
                onClick={onExpand}
              >
                <ExpandMoreIcon {...commonIconProps} />
              </IconButton>
            </div>
          )}
        </AccordionSummary>
        <AccordionDetails className='project-expanded-container'>
          {commonPropertyNodes.map((node) => node)}
          <div className='project-controls'>
            <Link iconProps={commonIconProps} project={props.project} />
            <IconButton
              className='project-control project-expand-control-less'
              data-testid='project-collapse-button'
              edge='end'
              onClick={onCollapse}
            >
              <ExpandLessIcon className='test' {...commonIconProps} />
            </IconButton>
          </div>
        </AccordionDetails>
      </Accordion>
    );
  }

  return (
    <div
      className='project-container project-container-flat'
      data-testid={props.testId}
    >
      <ListItem
        className='project-title'
        label='Title'
        value={props.project.title}
      />
      <ListItem
        className='project-year'
        label='Year'
        value={props.project.year}
      />
      <ListItem
        className='project-description'
        label='Description'
        value={props.project.description}
      />
      {commonPropertyNodes.map((node) => node)}
    </div>
  );
};

Project.propTypes = {
  project: ProsearchPropTypes.Project.isRequired,

  enableAccordions: PropTypes.bool,
  testId: PropTypes.string,
};

Project.defaultProps = {
  enableAccordions: false,
};

export default Project;
