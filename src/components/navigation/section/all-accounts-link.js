import React, { PropTypes } from 'react';

import SectionLink from './link';
import Currency from '../../numbers/currency';

const AllAccountsLink = ({ total, onClick, truncated }) => (
  <SectionLink onClick={onClick}>
    {truncated ? 'Accounts' : 'All Accounts'}
    {!truncated && <span className="sidebar-total"><Currency amount={total} withDollarSign /></span>}
  </SectionLink>
);

AllAccountsLink.propTypes = {
  total: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  truncated: PropTypes.bool.isRequired,
};

export default AllAccountsLink;
