import React from 'react';
import PropTypes from 'prop-types';

const CourseBar = ({ data, categories }) => {
  const { category, title, link } = data;

  // TODO: Consider averaging colors
  const titleStyle = {
    background: categories
      .filter((cat) => category.includes(cat.name))
      .map((cat) => cat.color)[0],
  };

  return (
    <div className="skillbar clearfix">
      <a href={link}>
        <div className="skillbar-title" style={titleStyle}><span>{title}</span></div>
      </a>
    </div>
  );
};

CourseBar.propTypes = {
  data: PropTypes.shape({
    category: PropTypes.arrayOf(PropTypes.string).isRequired,
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  categories: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    color: PropTypes.string,
  })),
};

CourseBar.defaultProps = {
  categories: [],
};

export default CourseBar;
