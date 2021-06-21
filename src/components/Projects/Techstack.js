import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Techstack = ({ data }) => (
  <div>
    <h4>Techstack: </h4>
    <p>
      { data.techstack.map((item, index) => <Fragment key={`${Math.random() * 1000}`}>{ index > 0 && ', ' }{ item } </Fragment>) }
    </p>
  </div>
);

Techstack.propTypes = {
  data: PropTypes.shape({
    techstack: [PropTypes.string],
  }).isRequired,
};

export default Techstack;
