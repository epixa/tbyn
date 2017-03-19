import React, { PropTypes } from 'react';

import { formatAsDollars } from '../../../../lib/numbers/currency';

const AccountNavHeader = ({ children, onClick, total, truncated }) => (
  <h1 onClick={onClick} className="sidebar-accountnav-header">
    {children}
    {!truncated && <span className="sidebar-total">{formatAsDollars(total)}</span>}
  </h1>
);

AccountNavHeader.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
  truncated: PropTypes.bool.isRequired,
};

export default AccountNavHeader;
