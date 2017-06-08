import React, { PropTypes } from 'react';

import Currency from '../../numbers/currency';

const AccountLink = ({ account, onClick, total, truncated }) => (
  <a onClick={onClick} className="sidebar-accountnav-link">
    <span className="sidebar-accountnav-notification-count" />
    <span className="sidebar-accountnav-account-name">{account.get('name')}</span>
    {!truncated && (
      <span className="sidebar-total">
        <Currency amount={total} />
      </span>
    )}
  </a>
);

AccountLink.propTypes = {
  account: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
  truncated: PropTypes.bool.isRequired,
};

export default AccountLink;
