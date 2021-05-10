import React from 'react';
import PropTypes from 'prop-types';

const Techstack = ({ data }) => (
  <p>
    <h4>Techstack: </h4>{ data.techstack.map((item, index) => <>{ index > 0 && ', ' }{ item } </>) }
  </p>
);

Techstack.propTypes = {
  data: PropTypes.shape({
    techstack: [PropTypes.string],
  }).isRequired,
};

export default Techstack;
