import React, { PropTypes } from 'react';

import SectionLink from './link';

import { formatAsDollars } from '../../../../lib/numbers/currency';

const AllAccountsLink = ({ total, onClick, truncated }) => (
  <SectionLink onClick={onClick}>
    {truncated ? 'Accounts' : 'All Accounts'}
    {!truncated && <span className="sidebar-total">{formatAsDollars(total)}</span>}
  </SectionLink>
);

AllAccountsLink.propTypes = {
  total: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  truncated: PropTypes.bool.isRequired,
};

export default AllAccountsLink;
