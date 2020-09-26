import PropTypes from 'prop-types';

export const ProjectStudents = PropTypes.arrayOf(
  PropTypes.exact({
    email: PropTypes.string,
    name: PropTypes.string,
  }).isRequired
);

export const Project = PropTypes.exact({
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,

  area: PropTypes.string,
  description: PropTypes.string,
  platform: PropTypes.string,
  programme: PropTypes.string,
  students: ProjectStudents,
  supervisor: PropTypes.string,
  technology: PropTypes.string,
  video: PropTypes.string,
});

export const SearchResults = PropTypes.exact({
  results: PropTypes.arrayOf(Project).isRequired,
  total: PropTypes.number.isRequired,
});
