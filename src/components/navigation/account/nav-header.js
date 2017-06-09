import React, { PropTypes } from 'react';

import Currency from '../../numbers/currency';

const AccountNavHeader = ({ children, collapsed, onClick, total, truncated }) => {
  const h1Classes = ['sidebar-accountnav-header'];
  if (collapsed) {
    h1Classes.push('sidebar-accountnav-header-collapsed');
  }
  return (
    <h1 onClick={onClick} className={h1Classes.join(' ')}>
      <span className="sidebar-accountnav-header-name">{children}</span>
      {!truncated && (
        <span className="sidebar-total sidebar-accountnav-header-total">
          <Currency amount={total} withDollarSign />
        </span>
      )}
    </h1>
  );
};

AccountNavHeader.propTypes = {
  children: PropTypes.node.isRequired,
  collapsed: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
  truncated: PropTypes.bool.isRequired,
};

export default AccountNavHeader;
