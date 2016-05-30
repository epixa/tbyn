'use strict';

import React from 'react';

const TextField = ({ children, field }) => (
  <div>
    <label>
      {children}
      <input type="text" {...field}/>
    </label>
    {field.touched && field.error && <div>{field.error}</div>}
  </div>
);

export default TextField;
