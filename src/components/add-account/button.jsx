'use strict';

import React from 'react';

const AddAccountButton = ({ onClick, truncated }) => (
  <button onClick={onClick}>
    {truncated ? 'Add' : 'Add Account'}
  </button>
);

export default AddAccountButton;
