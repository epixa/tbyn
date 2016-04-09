'use strict';

import React from 'react';

const SectionLink = ({ children, onClick }) => (
  <a onClick={onClick}>
    {children}
  </a>
);

export default SectionLink;
