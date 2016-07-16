import React, { PropTypes } from 'react';

const AccountNavHeader = ({ children, onClick, total, truncated }) => (
  <h1 onClick={onClick}>
    {children}
    {!truncated && <span>{total}</span>}
  </h1>
);

AccountNavHeader.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
  truncated: PropTypes.bool.isRequired,
};

export default AccountNavHeader;
