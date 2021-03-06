import MaterialCard from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import React from 'react';
import Typography from '@material-ui/core/Typography';

import Anchor from 'prosearch-components/Anchor';

const commonAnchorProps = {
  className: 'inline-link',
  target: '_blank',
};

const Card = () => {
  return (
    <MaterialCard className='about-contents'>
      <CardContent>
        <Typography variant='body1'>
          <div className='about-description'>
            At the end of every academic year{' '}
            <Anchor href='https://dcu.ie' {...commonAnchorProps}>
              Dublin City University
            </Anchor>{' '}
            holds a{' '}
            <Anchor
              href='https://www.dcu.ie/engineering_and_computing/Final-Year-Projects-Expo.shtml'
              {...commonAnchorProps}
            >
              project exposition
            </Anchor>{' '}
            in which final year Engineering and Computing students present their
            year-long projects to employers and the faculty. We have collected
            the data of all exhibited projects since 2011 and combined it into a
            single{' '}
            <Anchor
              href='https://github.com/teabolt/dcu_eng_comp_projects_dataset'
              {...commonAnchorProps}
            >
              dataset
            </Anchor>
            . On top of the dataset we have built this{' '}
            <Anchor href='https://reactjs.org' {...commonAnchorProps}>
              React
            </Anchor>
            —
            <Anchor href='https://expressjs.com' {...commonAnchorProps}>
              Express
            </Anchor>
            —
            <Anchor href='https://www.elastic.co' {...commonAnchorProps}>
              ElasticSearch
            </Anchor>{' '}
            web application to let future students, lecturers or employers
            search for past projects to find inspiration and ideas.
          </div>
          <div className='about-copyright'>
            Any third-party material presented on the website belongs to their
            respective owners. This work is open source and licensed under MIT.
            Please see the following repositories:{' '}
            <Anchor
              href='https://github.com/teabolt/dcu_project_search_frontend'
              {...commonAnchorProps}
            >
              frontend
            </Anchor>
            {', '}
            <Anchor
              href='https://github.com/teabolt/dcu_project_search_backend'
              {...commonAnchorProps}
            >
              backend
            </Anchor>
            {', '}
            <Anchor
              href='https://github.com/teabolt/dcu_project_search_elasticsearch'
              {...commonAnchorProps}
            >
              ElasticSearch
            </Anchor>
            {', '}
            <Anchor
              href='https://github.com/teabolt/dcu_project_search_deployment'
              {...commonAnchorProps}
            >
              deployment
            </Anchor>
            {', '}
            <Anchor
              href='https://github.com/teabolt/dcu_eng_comp_projects_dataset'
              {...commonAnchorProps}
            >
              dataset
            </Anchor>
            {'.'}
          </div>
          <div className='about-credits'>
            This application has been developed by{' '}
            <Anchor
              href='https://www.linkedin.com/in/tbalt'
              {...commonAnchorProps}
            >
              Tomas Baltrunas
            </Anchor>
            . Special thanks to{' '}
            <Anchor href='https://github.com/KingEnoch' {...commonAnchorProps}>
              Enoch Oppong
            </Anchor>{' '}
            for help with data collection and{' '}
            <Anchor
              href='https://www.linkedin.com/in/rosee-byrne-675866a6'
              {...commonAnchorProps}
            >
              Rosee Byrne
            </Anchor>{' '}
            for UI/UX review.
          </div>
          <div className='about-contacts'>
            Please report any issues under the{' '}
            <Anchor
              href='https://github.com/teabolt/dcu_project_search_frontend/issues'
              {...commonAnchorProps}
            >
              frontend repository
            </Anchor>{' '}
            or by email at{' '}
            <Anchor
              href='mailto:tomasbaltrunas0@gmail.com'
              {...commonAnchorProps}
            >
              tomasbaltrunas0@gmail.com
            </Anchor>
          </div>
        </Typography>
      </CardContent>
    </MaterialCard>
  );
};

export default Card;
