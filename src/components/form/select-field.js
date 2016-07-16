import React, { PropTypes } from 'react';

const SelectField = ({
  children,
  changeHandler,
  field,
  options,
  allowRenderError = true,
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

SelectField.propTypes = {
  children: PropTypes.node.isRequired,
  changeHandler: PropTypes.func.isRequired,
  options: PropTypes.object.isRequired,
  field: PropTypes.object.isRequired,
  allowRenderError: PropTypes.bool.isRequired,
};

export default SelectField;
