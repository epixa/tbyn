import React, { PropTypes } from 'react';

const RadioBooleanField = ({
  children: [affirmative, negative],
  input,
  meta,
}) => (
  <div className="radio-boolean-field">
    <label className="radio-boolean-option">
      <input type="radio" {...input} value="1" checked={input.value === '1'} />
      {affirmative}
    </label>
    <label className="radio-boolean-option">
      <input type="radio" {...input} value="0" checked={input.value === '0'} />
      {negative}
    </label>
    {meta.touched && meta.error && <div className="form-field-error">{meta.error}</div>}
  </div>
);

RadioBooleanField.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
};

export default RadioBooleanField;
