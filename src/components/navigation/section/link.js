import React, { PropTypes } from 'react';

const SectionLink = ({ children, onClick }) => (
  <a onClick={onClick}>
    {children}
  </a>
);

SectionLink.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SectionLink;
