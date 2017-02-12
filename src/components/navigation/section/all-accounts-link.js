import React, { PropTypes } from 'react';

import SectionLink from './link';

const AllAccountsLink = ({ onClick, truncated }) => (
  <SectionLink onClick={onClick}>
    {truncated ? 'Accounts' : 'All Accounts'}
  </SectionLink>
);

AllAccountsLink.propTypes = {
  onClick: PropTypes.func.isRequired,
  truncated: PropTypes.bool.isRequired,
};

export default AllAccountsLink;
