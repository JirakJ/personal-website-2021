import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import Techstack from './Techstack';

const Cell = ({ data }) => (
  <div className="cell-container">
    <article className="mini-post">
      <header>
        <h3><a href={data.link}>{data.title}</a></h3>
        <time className="published">{dayjs(data.date).format('MMMM, YYYY')} - {data.dateTo ? dayjs(data.dateTo).format('MMMM, YYYY') : 'Present'}</time>
      </header>
      <div className="description-text">
        <p>{data.desc}</p>
        { data.techstack.length > 0 && <Techstack data={data} /> }
      </div>
    </article>
  </div>
);

Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string,
    image: PropTypes.string,
    date: PropTypes.string.isRequired,
    dateTo: PropTypes.string,
    desc: PropTypes.string.isRequired,
    techstack: [PropTypes.string],
  }).isRequired,
};

export default Cell;
