'use strict';

import React from 'react';

const AccountNavHeader = ({children, onClick, total, truncated}) => (
  <h1 onClick={onClick}>
    {children}
    {!truncated && <span>{total}</span>}
  </h1>
);

export default AccountNavHeader;
