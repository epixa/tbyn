import React, { PropTypes } from 'react';

const RadioBooleanField = ({
  children: [affirmative, negative],
  field,
}) => (
  <div>
    <label>
      <input type="radio" name="field" {...field} value="1" checked={field.value === '1'} />
      {affirmative}
    </label>
    <label>
      <input type="radio" name="field" {...field} value="0" checked={field.value === '0'} />
      {negative}
    </label>
    {field.touched && field.error && <div>{field.error}</div>}
  </div>
);

RadioBooleanField.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  field: PropTypes.object.isRequired,
};

export default RadioBooleanField;
