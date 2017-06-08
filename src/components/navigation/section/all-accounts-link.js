import React, { PropTypes } from 'react';

import SectionLink from './link';
import Currency from '../../numbers/currency';

const AllAccountsLink = ({ total, onClick, truncated }) => (
  <SectionLink onClick={onClick}>
    <span className="sidebar-sectionnav-allaccounts-name">{truncated ? 'Accounts' : 'All Accounts'}</span>
    {!truncated && (
      <span className="sidebar-total sidebar-sectionnav-allaccounts-total">
        <Currency amount={total} withDollarSign />
      </span>
    )}
  </SectionLink>
);

AllAccountsLink.propTypes = {
  total: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  truncated: PropTypes.bool.isRequired,
};

export default AllAccountsLink;
