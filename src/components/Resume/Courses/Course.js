import React from 'react';
import PropTypes from 'prop-types';

const Course = ({ data }) => (
  <li className="skillbar clearfix">
    <a href={data.link}>
      <p className="coursebar-title">{data.title}</p>
    </a>
  </li>
);

Course.propTypes = {
  data: PropTypes.shape({
    link: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Course;
