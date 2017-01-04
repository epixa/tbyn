import React, { PropTypes } from 'react';

const TextField = ({ children, input, meta }) => (
  <div>
    <label>
      {children}
      <input type="text" {...input} />
    </label>
    {meta.touched && meta.error && <div>{meta.error}</div>}
  </div>
);

TextField.propTypes = {
  children: PropTypes.node.isRequired,
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
};

export default TextField;
