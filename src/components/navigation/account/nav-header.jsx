'use strict';

import React from 'react';

const AccountNavHeader = ({children, onClick, total}) => (
  <h1 onClick={onClick}>
    {children}
    <span>{total}</span>
  </h1>
);

export default AccountNavHeader;
