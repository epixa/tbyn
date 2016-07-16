import moment from 'moment';
import DatePicker from 'react-datepicker';
import React, { PropTypes } from 'react';

const DateField = ({ children, changeHandler, field }) => (
  <div>
    <label>
      {children}
      <input type="hidden" {...field} />
      <DatePicker readOnly dateFormat="MM/DD/YYYY" selected={moment(field.value)} onChange={changeHandler(field)} />
    </label>
    {field.touched && field.error && <div>{field.error}</div>}
  </div>
);

DateField.propTypes = {
  children: PropTypes.node.isRequired,
  changeHandler: PropTypes.func.isRequired,
  field: PropTypes.object.isRequired,
};

export default DateField;
