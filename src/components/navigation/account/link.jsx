'use strict';

import React from 'react';

const AccountLink = ({ account, onClick, total }) => (
  <a onClick={onClick}>
    {account.get('name')}
    <span>{total}</span>
  </a>
);

export default AccountLink;
