import React, { PropTypes } from 'react';

const TextField = ({ children, field }) => (
  <div>
    <label>
      {children}
      <input type="text" {...field} />
    </label>
    {field.touched && field.error && <div>{field.error}</div>}
  </div>
);

TextField.propTypes = {
  children: PropTypes.node.isRequired,
  field: PropTypes.object.isRequired,
};

export default TextField;
