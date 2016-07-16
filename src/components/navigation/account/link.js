'use strict';

import React from 'react';

const AccountLink = ({ account, onClick, total, truncated }) => (
  <a onClick={onClick}>
    {account.get('name')}
    {!truncated && <span>{total}</span>}
  </a>
);

export default AccountLink;
