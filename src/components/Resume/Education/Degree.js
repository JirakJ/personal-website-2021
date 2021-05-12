import React from 'react';
import PropTypes from 'prop-types';

const Degree = ({ data }) => (
  <article className="degree-container">
    <header>
      <h4 className="degree">{data.degree}</h4>
      <span className="these"><b>Final thesis:</b> <a href={data.finalThesis.link}>{data.finalThesis.name}</a></span>
      <p className="school"><a href={data.link}>{data.school}</a>, {data.year}</p>
    </header>
  </article>
);

Degree.propTypes = {
  data: PropTypes.shape({
    degree: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    school: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    finalThesis: {
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      theseLink: PropTypes.string.isRequired,
    },
  }).isRequired,
};

export default Degree;
