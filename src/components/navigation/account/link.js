import React, { PropTypes } from 'react';

const AccountLink = ({ account, onClick, total, truncated }) => (
  <a onClick={onClick}>
    {account.get('name')}
    {!truncated && <span>{total}</span>}
  </a>
);

AccountLink.propTypes = {
  account: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
  truncated: PropTypes.bool.isRequired,
};

export default AccountLink;
