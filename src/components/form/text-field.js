import React, { PropTypes } from 'react';

const TextField = ({ children, input, meta }) => (
  <div>
    <label>
      <span className="field-label">{children}</span>
      <input type="text" {...input} />
    </label>
    {meta.touched && meta.error && <div className="form-field-error">{meta.error}</div>}
  </div>
);

TextField.propTypes = {
  children: PropTypes.node.isRequired,
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
};

export default TextField;
