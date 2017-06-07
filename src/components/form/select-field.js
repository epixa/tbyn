import React, { PropTypes } from 'react';

const SelectField = ({
  children,
  input,
  options,
  meta,
  allowRenderError = true,
}) => (
  <div>
    <label>
      <span className="field-label">{children}</span>
      <select {...input}>
        {Object.keys(options).map(key => (
          <option value={key} key={key}>{options[key]}</option>
        ))}
      </select>
    </label>
    {allowRenderError && meta.touched && meta.error && <div className="form-field-error">{meta.error}</div>}
  </div>
);

SelectField.propTypes = {
  children: PropTypes.node.isRequired,
  options: PropTypes.object.isRequired,
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  allowRenderError: PropTypes.bool.isRequired,
};

export default SelectField;
