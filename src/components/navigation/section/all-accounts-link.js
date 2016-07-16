'use strict';

import React from 'react';

import SectionLink from './link';

const AllAccountsLink = ({ onClick, truncated }) => (
  <SectionLink onClick={onClick}>
    {truncated ? 'All' : 'All Accounts'}
  </SectionLink>
);

export default AllAccountsLink;
