import React, { PropTypes } from 'react';

import Currency from '../../numbers/currency';

const AccountNavHeader = ({ children, onClick, total, truncated }) => (
  <h1 onClick={onClick} className="sidebar-accountnav-header">
    <span className="sidebar-accountnav-header-name">{children}</span>
    {!truncated && (
      <span className="sidebar-total sidebar-accountnav-header-total">
        <Currency amount={total} withDollarSign />
      </span>
    )}
  </h1>
);

AccountNavHeader.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
  truncated: PropTypes.bool.isRequired,
};

export default AccountNavHeader;
