import className from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import FallbackPlaceholder from 'prosearch-components/FallbackPlaceholder';
import StudentsList from 'prosearch-components/StudentsList';

import './Project.scss';

const Project = (props) => {
  return (
    <div>
      <Accordion className='project-container' key={props.key}>
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              className='project-expand-control'
              color='inherit'
            />
          }
        >
          <div
            className={className(
              'label-value-pair',
              'project-description before-expanded'
            )}
          >
            <div className='project-header'>
              <div className='project-title'>{props.project.title}</div>
              <div className='project-year'>{props.project.year}</div>
            </div>
            <div className='label-value-pair-label'>Description</div>
            <div className='label-value-pair-value'>
              <FallbackPlaceholder node={props.project.description} />
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className={className('label-value-pair', 'project-programme')}>
            <div className='label-value-pair-label'>Programme</div>
            <div className='label-value-pair-value'>
              <FallbackPlaceholder node={props.project.programme} />
            </div>
          </div>
          <div className={className('label-value-pair', 'project-supervisor')}>
            <div className='label-value-pair-label'>Supervisor</div>
            <div className='label-value-pair-value'>
              <FallbackPlaceholder node={props.project.supervisor} />
            </div>
          </div>
          <div className={className('label-value-pair', 'project-students')}>
            <div className='label-value-pair-label'>Students</div>
            <div className='label-value-pair-value'>
              <FallbackPlaceholder
                node={<StudentsList students={props.project.students} />}
              />
            </div>
          </div>
          <div className={className('label-value-pair', 'project-area')}>
            <div className='label-value-pair-label'>Area</div>
            <div className='label-value-pair-value'>
              <FallbackPlaceholder node={props.project.area} />
            </div>
          </div>
          <div className={className('label-value-pair', 'project-technology')}>
            <div className='label-value-pair-label'>Technology</div>
            <div className='label-value-pair-value'>
              <FallbackPlaceholder node={props.project.technology} />
            </div>
          </div>
          {props.project.video && (
            <div className={className('label-value-pair', 'project-video')}>
              <div className='label-value-pair-label'>Video</div>
              <div className='label-value-pair-value'>
                <FallbackPlaceholder node={props.project.video} />
              </div>
            </div>
          )}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

Project.propTypes = {
  key: PropTypes.string.isRequired,
  project: PropTypes.object.isRequired, // FIXME
};

export default Project;
