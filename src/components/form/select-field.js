'use strict';

import React from 'react';

const SelectField = ({
  children,
  changeHandler,
  field,
  options,
  allowRenderError=true
}) => (
  <div>
    <label>
      {children}
      <select {...field} onChange={changeHandler(field)}>
        {Object.keys(options).map(key => (
          <option value={key} key={key}>{options[key]}</option>
        ))}
      </select>
    </label>
    {allowRenderError && field.touched && field.error && <div>{field.error}</div>}
  </div>
);

export default SelectField;
