'use strict';

import React from 'react';

const ToggleSidebar = ({ collapsed, onClick }) => (
  <a onClick={onClick}>
    {collapsed ? 'Expand' : 'Collapse' }
  </a>
);

export default ToggleSidebar;
